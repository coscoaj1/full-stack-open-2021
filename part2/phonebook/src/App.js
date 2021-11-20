import React, { useEffect, useState } from 'react';
import PersonList from './components/PersonList';
import Personform from './components/PersonForm';
import axios from 'axios';
import phoneService from './services/phonebook';
import SearchIcon from '@material-ui/icons/Search';
import './Index.css';
import Notification from './components/Notification';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filteredData, setFilteredData] = useState([]);
	const [filter, setFilter] = useState('');
	const [notificationMessage, setNotificationMessage] = useState(null);

	const timeout = () => {
		setTimeout(() => {
			setNotificationMessage(null);
		}, 5000);
	};
	const hook = () => {
		axios.get('/api/persons').then((response) => {
			console.log('promise fulfilled');
			setPersons(response.data);
			console.log(response.data);
		});
	};

	useEffect(hook, []);

	const addName = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
		};

		const alreadyExists = persons.some((person) => person.name === newName);

		if (newName === '') {
			return;
		}

		if (alreadyExists) {
			const person = persons.find((p) => p.name === newName);
			const changedPerson = { ...person, number: newNumber };
			const { id } = person;

			if (newNumber.length < 8) {
				setNotificationMessage(
					`${newNumber} is too short, please provide a number with at least 8 digits`
				);
				timeout();
				return;
			}

			const confirmUpdate = window.confirm(
				`${newName} is already added to phonebook, replace the old number with a new one?`
			);

			if (confirmUpdate) {
				console.log(person._id);
				phoneService //
					.update(person._id, changedPerson)
					.then((returnedPerson) => {
						setPersons(
							persons.map((person) =>
								person._id !== id ? person : returnedPerson
							)
						);

						setNotificationMessage(`Updated number for ${person.name}`);
						timeout();
					})
					.catch((error) => {
						console.log(error.response.data);
						setNotificationMessage(
							`Information for ${person.name} has already been removed from server`
						);
						setPersons(persons.filter((p) => p.id !== id));
						timeout();
					});
			}

			setNewName('');
			setNewNumber('');
			return;
		}

		phoneService //
			.create(newPerson)
			.then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));

				setNotificationMessage(`Added ${returnedPerson.name}`);
				timeout();
				setNewName('');
				setNewNumber('');
				hook();
			})
			.catch((error) => {
				console.log(error.response.data);
				setNotificationMessage(error.response.data.error);
				timeout();
			});
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleFilter = (event) => {
		setFilter(event.target.value);
		console.log(event.target.value);
		const newFilter = persons.filter((value) => {
			return value.name
				.toLowerCase()
				.includes(event.target.value.toLowerCase());
		});
		setFilteredData(newFilter);
	};

	const handleDelete = (id) => {
		const person = persons.find((p) => p._id === id);
		const confirmDelete = window.confirm(`Delete ${person.name}?`);
		if (confirmDelete) {
			phoneService.deleteName(id).then(() => {
				const filteredPersons = persons.filter((person) => person.id !== id);
				setPersons(filteredPersons);
				setNotificationMessage(`Deleted ${person.name}`);
				hook();
				timeout();
			});
		}
	};

	return (
		<div className="container">
			<h2>Orange Kitty's Phonebook</h2>
			<Notification message={notificationMessage} />
			<div className="searchInputs">
				<p>Filtered list</p>
				<input className="input" type="text" onChange={handleFilter}></input>
				<SearchIcon id="searchIcon" />
			</div>
			<h2>Add New</h2>
			<Personform
				newName={newName}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
				handleNameChange={handleNameChange}
				addName={addName}
			/>

			<h2>Numbers</h2>
			<PersonList
				persons={persons}
				handleDelete={handleDelete}
				filteredData={filteredData}
				filter={filter}
			/>
		</div>
	);
};

export default App;
