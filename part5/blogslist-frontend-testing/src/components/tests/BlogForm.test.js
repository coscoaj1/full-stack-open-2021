import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogForm from '../BlogForm';

test('<BlogForm /> calls the event handler with the right details', () => {
	const createBlog = jest.fn();

	const component = render(<BlogForm createBlog={createBlog} />);

	component.debug();

	const title = component.container.querySelector('#title');
	const author = component.container.querySelector('#author');
	const url = component.container.querySelector('#url');
	const form = component.container.querySelector('form');

	fireEvent.change(title, {
		target: { value: 'testing of forms could be easier' },
	});
	fireEvent.change(author, {
		target: { value: 'Orange Kitty' },
	});
	fireEvent.change(url, {
		target: { value: 'www.google.com' },
	});
	fireEvent.submit(form);

	expect(createBlog.mock.calls).toHaveLength(1);
	expect(createBlog.mock.calls[0][0]).toStrictEqual({
		author: 'Orange Kitty',
		title: 'testing of forms could be easier',
		url: 'www.google.com',
	});
});
