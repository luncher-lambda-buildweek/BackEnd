// const supertest = require('supertest');
// const server = require('../api/server.js');
// const db = require('../data/dbConfig.js')


// describe('auth-router', () => {
//     beforeEach(async() => {
//         await db('users').truncate();
//     })

//     describe('Post api/register', () => {
//         it('should require authorization', async() => {
//             let user = { email:"noble@email.com", password: "password", role:"school" }
//             await supertest(server)
//                 .post('/register')
//                 .send(user)
//                 .then(res => {
//                     expect(res.body).not.toBeNull()
//                 })
//         })

//         it('should receive a 404 status code when no token is given', async() => {
//             const response = await supertest(server)
//             .post('/register');
//             response.status = 404
//             expect(response.statusCode).toBe(404)
//         })
//     })
// })