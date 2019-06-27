const supertest = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js')

describe('server', () => {
    describe('GET /', () => {
        it('should return its working', async () => {
            await supertest(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api: "It's working!"})
            })
        })

        it('responds with 200 OK', async () => {
            await supertest(server)
                .get('/')
                .expect('Content-Type', /json/i);
        })
    })
})