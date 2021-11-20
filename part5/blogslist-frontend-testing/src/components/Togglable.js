import { useState } from 'react';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';

import '../Index.css';

const Togglable = (props) => {
	const [visible, setVisible] = useState(false);

	const hideWhenVisible = { display: visible ? 'none' : '' };
	const showWhenVisible = { display: visible ? '' : 'none' };

	const toggleVisibility = () => {
		setVisible(!visible);
	};

	return (
		<div>
			<div style={hideWhenVisible}>
				<Button
					variant="contained"
					color="primary"
					size="small"
					startIcon={<AddIcon />}
					onClick={toggleVisibility}
				>
					{props.buttonLabel}
				</Button>
			</div>
			<div style={showWhenVisible}>
				{props.children}
				<Button
					variant="contained"
					color="primary"
					size="small"
					startIcon={<CancelIcon />}
					onClick={toggleVisibility}
				>
					cancel
				</Button>
			</div>
		</div>
	);
};

export default Togglable;
