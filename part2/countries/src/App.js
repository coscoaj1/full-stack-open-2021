import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CountryList from './components/CountryList';

function App() {
	const [countryList, setCountryList] = useState([]);
	const [input, setInput] = useState('');

	console.log(process.env);

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const hook = () => {
		axios
			.get(`https://restcountries.eu/rest/v2/name/${input}`)
			.then((response) => {
				console.log('promise fulfilled');
				console.log(response.data);
				setCountryList(response.data);
			});
	};
	useEffect(hook, [input]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p>find countries</p>
				<input type="text" value={input} onChange={handleChange} />
			</form>
			<CountryList countryList={countryList} />
		</div>
	);
}

export default App;
