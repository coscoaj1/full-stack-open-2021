const Course = ({ courses, total, total2 }) => {
	const listItems = courses[0].parts.map((part) => (
		<li key={part.id}>
			{part.name}
			{part.exercises}
		</li>
	));
	const listItems2 = courses[1].parts.map((part) => (
		<li key={part.id}>
			{part.name}
			{part.exercises}
		</li>
	));

	return (
		<>
			<h1>{courses[0].name}</h1>
			<p>{listItems}</p>
			<p>total of {total} exercises</p>
			<h1>{courses[1].name}</h1>
			<p>{listItems2}</p>
			<p>total of {total2} exercises</p>
		</>
	);
};

export default Course;
