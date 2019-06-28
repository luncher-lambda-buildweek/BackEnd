const supertest = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');


describe('auth-router', () => {
    beforeEach (async() => {
        await db('users').truncate();
    })
})


describe('POST /register', () => {
    it("should return error 404 if not authorized", () => {
        return supertest(server)
        .post('/register')
        .then((response) => {
            expect(response.statusCode).toBe(404)
        })
    })
})

describe('POST /login', () => {
    it('should return 404 error if login is not authorized', () => {
        return supertest(server)
        .post('/login')
        .then((response) => {
            expect(response.statusCode).toBe(404)
        })
    })
})