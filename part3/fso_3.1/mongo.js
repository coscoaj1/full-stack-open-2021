const mongoose = require('mongoose');

if (process.argv.length < 3) {
	console.log(
		'Please provide the password as an argument: node mongo.js <password>'
	);
	process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://power-user:${password}@cluster0.rpsrs.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
});

const Person = mongoose.model('Person', personSchema);

const name = process.argv[3];
const number = process.argv[4];

const person = new Person({
	name: name,
	number: number,
});

if (name) {
	person.save().then((result) => {
		console.log(`added ${name} number ${number} to phonebook`);
		mongoose.connection.close();
	});
} else if (!name) {
	Person.find({}).then((result) => {
		result.forEach((person) => {
			console.log(person);
			mongoose.connection.close();
		});
	});
}
