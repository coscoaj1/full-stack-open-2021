import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ place }) => {
	const [weather, setWeather] = useState([]);

	const getWeather = () => {
		axios
			.get(
				`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${place}`
			)
			.then((response) => {
				console.log(response.data);
				setWeather(response.data);
			});
	};

	useEffect(getWeather, [place]);

	if (Object.keys(weather).length !== 0) {
		return (
			<div>
				<p>temperature: {weather.current.temperature}</p>
				<p>humidity: {weather.current.humidity}%</p>
				<p>wind: {weather.current.wind_speed} mph</p>
				<img src={weather.current.weather_icons[0]} alt="weather icon" />
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default Weather;
