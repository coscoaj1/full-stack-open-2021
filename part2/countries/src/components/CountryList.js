import React from 'react';
import Languages from './Languages';
import Weather from './Weather';

const CountryList = ({ countryList }) => {
	if (countryList.length > 10) {
		return (
			<div>
				<p>too many matches, specify another filter</p>
			</div>
		);
	} else if (countryList.length < 10 && countryList.length > 1) {
		return (
			<div>
				{countryList.map((item) => {
					return <div key={item.numericCode}>{item.name}</div>;
				})}
			</div>
		);
	} else if (countryList.length === 1) {
		return (
			<div>
				<div>
					{countryList.map((item) => {
						return (
							<ul key={item.numericCode}>
								<h2>{item.name}</h2>
								<li>capital: {item.capital}</li>
								<li>population: {item.population}</li>
								<h2>languages</h2>
							</ul>
						);
					})}
				</div>
				<ul>
					<Languages languages={countryList[0].languages} />
				</ul>
				<div>
					<img src={countryList[0].flag} width="100" alt="flag" />
				</div>
				<div>
					<h2>Weather in {countryList[0].capital}</h2>
					<Weather place={countryList[0].capital} />
				</div>
			</div>
		);
	} else {
		return null;
	}
};
export default CountryList;
