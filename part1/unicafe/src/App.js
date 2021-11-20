import { useState } from 'react';

const Button = (props) => (
	<button onClick={props.handleClick}>{props.text}</button>
);

const Stats = ({ text, value, symbol }) => (
	<p>
		{text}
		{value}
		{symbol}
	</p>
);

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const setToGood = (newGood) => {
		setGood(newGood);
		console.log(good);
	};

	const setToNeutral = (newNeutral) => {
		setNeutral(newNeutral);
	};

	const setToBad = (newBad) => {
		setBad(newBad);
	};

	const positive = good / (good + neutral + bad);

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={() => setToGood(good + 1)} text="good" />
			<Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
			<Button handleClick={() => setToBad(bad + 1)} text="bad" />
			<h1>statistics</h1>
			<Stats text="good " value={good} />
			<Stats text="neutral " value={neutral} />
			<Stats text="bad " value={bad} />
			<Stats text="totals " value={good + neutral + bad} />
			<Stats text="average " value={good - bad} />
			<Stats text="positive " value={positive * 100} symbol={'%'} />
		</div>
	);
}

export default App;
