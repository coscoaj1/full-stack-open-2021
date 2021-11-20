require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const Person = require('./models/person');

app.use(express.json());
app.use(express.static('build'));

const cors = require('cors');
app.use(cors());

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':url :method :response-time ms :body'));

app.get('/api/persons', (request, response) => {
	Person.find({}).then((persons) => {
		response.json(persons);
	});
});

app.get(`/api/persons/:id`, (request, response, next) => {
	Person.findById({ _id: request.params.id })
		.then((result) => {
			response.json(result);
		})
		.catch((error) => next(error));
});

app.get(`/info`, (request, response) => {
	const date = new Date();
	Person.find({}, { __v: 0 }).then((persons) => {
		response.send(
			`<p>Phonebook has info for ${persons.length} people</p> <p>${Date()}</p>`
		);
	});
	console.log(date);
});

app.delete(`/api/persons/:id`, (request, response) => {
	Person.deleteOne({ _id: request.params.id }).then((deletedPerson) => {
		if (deletedPerson) {
			response.status(204).end();
		} else {
			response(404).end();
		}
	});
});

app.post(`/api/persons`, (request, response, next) => {
	const body = request.body;

	if (!body.name || !body.number) {
		return response.status(400).json({
			error: 'content missing',
		});
	}

	const person = new Person({
		name: body.name,
		number: body.number,
	});

	person
		.save()
		.then((savedPerson) => {
			response.json(savedPerson);
		})
		.catch((error) => next(error));
});

app.put('/api/persons/:id', (request, response) => {
	console.log('put request received');
	const body = request.body;

	if (!body.name || !body.number) {
		return response.status(400).json({
			error: 'content missing',
		});
	}

	const person = {
		name: body.name,
		number: body.number,
	};

	Person.findByIdAndUpdate(request.params.id, person, {
		new: true,
	}).then((savedPerson) => {
		response.json(savedPerson);
	});
});

// const unknownEndpoint = (request, response) => {
// 	response.status(404).send({ error: 'unknown endpoint' });
// };

// app.use(unknownEndpoint);

const unknownRoute = (req, res) => {
	console.log('unkown route');
	res.status(404).end();
};

app.use(unknownRoute);

const errorHandler = (error, request, response, next) => {
	console.error(error.message);

	if (error.name === 'CastError' && error.message.includes('ObjectId')) {
		return response.status(400).json({ error: 'Malformed ID' });
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message });
	}
	next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
