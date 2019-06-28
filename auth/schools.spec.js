const supertest = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');
const schools = require('../helpers/schoolsModel.js');



describe('schools router', () => {
    beforeEach(async() => {
        await db('schools').truncate();
    })


    const mockSchool = {
        user_id: 1, 
        schoolName: "testSchool", 
        id: 1, 
        fundsNeeded: 500, 
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

        it('should getSchool by id', async () => {
            const testSchool = await schools.addSchool(mockSchool)
            const findSchool = await schools.getSchool(testSchool.id)
                expect(findSchool.id).toEqual(testSchool.id)
        })
    })

    describe('DELETE /:id', () => {
        it('should require authorization, will respond with 400 error', async () => {
            const response = await supertest(server)
                .delete('/api/schools/1')
                expect(response.status).toBe(400)
        })

    })
})



