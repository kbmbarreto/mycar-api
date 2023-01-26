/*
This test suite uses the Mocha framework and SuperTest library to test the "Users" model by sending requests to the app's endpoints and validating the responses. The test suite starts by syncing the database with a fresh schema using the sequelize.sync({force: true}) method, this way, any data created during the tests will be deleted after the tests. Then, it tests the following scenarios: creating a user, creating a user with missing fields, and creating a user with an existing email. Each test asserts that the response has the expected status code and body.

You should create routes and controllers to handle the routes and validate the request, check if the server is running and adapt the routes to your project.
 */

const request = require('supertest');
const app = require('your-app-file');
const assert = require('assert');
const { sequelize } = require('your-app-file').db;

describe('Users Model', () => {
    before(async () => {
        await sequelize.sync({ force: true });
    });

    it('should create a user', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                name: 'John Doe',
                password: 'password',
                email: 'johndoe@example.com'
            });
        assert.equal(res.statusCode, 201);
        assert.deepEqual(res.body, { message: 'User created' });
    });

    it('should not create a user with missing fields', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Jane Doe' });
        assert.equal(res.statusCode, 400);
        assert.deepEqual(res.body, { message: 'Validation error: email cannot be null, password cannot be null' });
    });

    it('should not create a user with an existing email', async () => {
        await request(app)
            .post('/users')
            .send({
                name: 'John Doe',
                password: 'password',
                email: 'johndoe@example.com'
            });
        const res = await request(app)
            .post('/users')
            .send({
                name: 'Jane Doe',
                password: 'password',
                email: 'johndoe@example.com'
            });
        assert.equal(res.statusCode, 400);
        assert.deepEqual(res.body, { message: 'Validation error: email must be unique' });
    });
});
