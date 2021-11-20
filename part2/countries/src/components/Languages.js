const Languages = ({ languages }) => {
	return languages.map((language) => (
		<li key={language.name}>{language.name}</li>
	));
};

export default Languages;
