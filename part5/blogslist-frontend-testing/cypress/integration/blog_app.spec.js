describe('Blog app', function () {
	beforeEach(function () {
		cy.request('POST', 'http://localhost:3001/api/testing/reset');
		const user = {
			name: 'whitey',
			username: 'WhiteKitty',
			password: 'evilKitty1121',
		};
		cy.request('POST', 'http://localhost:3001/api/users/', user);
		cy.request('POST', 'http://localhost:3001/api/login/', user);
		cy.visit('http://localhost:3000');
	});

	it('Login form is shown', function () {
		cy.visit('http://localhost:3000');
		cy.contains('Login to Blogs');
	});

	describe('Login', function () {
		it('succeeds with correct credentials', function () {
			cy.contains('log in').click();
			cy.get('#username').type('WhiteKitty');
			cy.get('#password').type('evilKitty1121');
			cy.get('#login-button').click();

			cy.contains('whitey logged in');
		});

		it('fails with incorrect credentials', function () {
			cy.contains('log in').click();
			cy.get('#username').type('WhiteKitty');
			cy.get('#password').type('wrong');
			cy.get('#login-button').click();

			cy.contains('Invalid username or password');
		});
	});

	describe('when logged in', function () {
		beforeEach(function () {
			cy.login({ username: 'WhiteKitty', password: 'evilKitty1121' });
		});

		it('a blog can be created', function () {
			cy.contains('add new').click();
			cy.get('#title').type('test blog');
			cy.get('#author').type('test blog');
			cy.get('#url').type('test blog');
			cy.get('#add-button').click();
			cy.contains('test blog');
		});

		it('like button works', function () {
			cy.addBlog({ title: 'test', author: 'test', url: 'test' });
			cy.contains('view').click();
			cy.get('#likeButton').click();
			cy.contains('likes: 1');
		});

		it('blog can be removed', function () {
			cy.addBlog({ title: 'test', author: 'test', url: 'test' });
			cy.contains('view').click();
			cy.get('#removeButton').click();
			cy.contains('Deleted test');
		});
	});
});
