import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const Personform = ({
	newName,
	newNumber,
	handleNameChange,
	handleNumberChange,
	addName,
}) => {
	return (
		<>
			<form onSubmit={addName}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<Button
						variant="contained"
						color="primary"
						size="small"
						startIcon={<SaveIcon />}
						type="submit"
					>
						Add
					</Button>
				</div>
			</form>
		</>
	);
};

export default Personform;
