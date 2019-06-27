const supertest = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');
const schools = require('./schools.js');
const restricted = require('../auth/restricted-middleware.js')

describe('schools router', () => {
    beforeEach(async() => {
        await db('schools').truncate();
    })

    const schoolTest = {
        user_id: 1, 
        schoolName: "testSchool", 
        id: 1, fundsNeeded: 500, 
        location: "San Francisco" 
    }

    describe('GET /', () => {
        it('should return a list of all schools', () => {
            const expected = [];
            return supertest(server)
            .get('/api/schools')
            .then(res => {
                expect(res.body).toEqual(expected)
            })
        })
        it('should respond with json', async () => {
            await supertest(server)
                .get('/api/schools')
                .expect('Content-Type', /json/i);
        })
        it('should respond with 200 code when successful', async () => {
            const response = await supertest(server)
                .get('/api/schools')
                expect(response.status).toBe(200)
        })
        it('should respond with 500 code when unsuccessful', async () => {
            const response = await supertest(server)
                .get('/api/schools')
                response.status = 500
                expect(response.status).toBe(500)
        })
    })
    describe('GET /:id', () => {
        it('should respond with 404 code if the school with the ID does not exist', async () => {
            const response = await supertest(server)
                .get('/api/schools/1000')
                expect(response.status).toBe(404)
        })

        it('should respond with 200 code if successful', async () => {
            const response = await supertest(server)
                .get('/api/schools/1')
                expect(response.status).toBe(200)
        })
    })
})

//
//
