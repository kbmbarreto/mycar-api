const request = require('supertest');
const assert = require('assert');

module.exports = app => {
    describe('POST /users', () => {
        it('should create a new user', async () => {
            const res = await request(app)
                .post('/users')
                .set('Content-Type', 'application/json')
                .send({
                    name: 'Kleber Barreto de Macedo',
                    password: 'Teste@123',
                    email: 'kleber.barreto@msn.com'
                });
            expect(res.statusCode).toEqual(201);
            expect(res.body).toEqual({message: 'User created'});
        });
    });

    describe('GET /users/1', () => {
        it('should return a user with id 1', async () => {
            const res = await request(app)
                .get('/users/1')
            assert.equal(res.statusCode, 200);
            assert.deepEqual(res.body, { id: 1, name: 'John Doe', email: 'johndoe@example.com' });
        });
    });

    describe('DELETE /users/1', () => {
        it('should delete a user with id 1', async () => {
            const res = await request(app)
                .delete('/users/1')
            assert.equal(res.statusCode, 200);
            assert.deepEqual(res.body, { message: 'User deleted' });
        });
    });
}