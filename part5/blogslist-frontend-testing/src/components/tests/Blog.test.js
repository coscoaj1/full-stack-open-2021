import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Blog from '../Blog';

const blog = {
	title: 'cry time 3-5AM',
	author: 'Orange Kitty',
	likes: 65,
	url: 'www.google.com',
};

test('renders blog title and author, but not likes or url', () => {
	const blog = {
		title: 'cry time 3-5AM',
		author: 'Orange Kitty',
		likes: 65,
		url: 'www.google.com',
	};

	const component = render(<Blog blog={blog} />);

	//method 1
	expect(component.container).toHaveTextContent('cry time 3-5AM');

	expect(component.container).toHaveTextContent('Orange Kitty');

	expect(component.container).not.toHaveTextContent('likes: 65');

	expect(component.container).not.toHaveTextContent('www.google.com');
});

test('clicking the button shows likes and url', () => {
	const blog = {
		title: 'cry time 3-5AM',
		author: 'Orange Kitty',
		likes: 65,
		url: 'www.google.com',
	};

	const mockHandler = jest.fn();

	const component = render(<Blog blog={blog} toggler={mockHandler} />);

	const button = component.getByText('view');
	fireEvent.click(button);

	expect(component.container).toHaveTextContent('likes: 65');
	expect(component.container).toHaveTextContent('www.google.com');
});

test('if like button is clicked twice, eveent handler is called twice', () => {
	const mockHandler = jest.fn();

	const component = render(<Blog blog={blog} handleLike={mockHandler} />);

	const button = component.getByText('view');
	fireEvent.click(button);

	const blogAll = component.container.querySelector('.blogs');
	expect(blogAll).toBeVisible();

	const likeButton = component.getByText('like');
	fireEvent.click(likeButton);
	fireEvent.click(likeButton);

	expect(mockHandler.mock.calls).toHaveLength(2);
});
