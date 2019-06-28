const db = require('../data/dbConfig.js');

const schools = require('./schoolsModel.js');

describe('schools model', () => {
    beforeEach(async() => { 
        await db('schools').truncate();
    })
    
    const mockSchool = {
        schoolName: "testSchool",
        fundsNeeded: 500,
        location: "San Francisco",
        user_id: 1,
        id: 1
    }

    describe('addSchool()', () => {
        it('should insert school', async () => {
            await schools.addSchool(mockSchool);
            const newSchool = await db('schools');
            expect(newSchool).toHaveLength(1)
        })
    })

    describe('getSchools()', () => {
        it('should get all schools', async () => {
            const allSchools = await schools.getSchools();
            expect(Array.isArray(allSchools)).toBe(true)
        })
    })

    describe('findById(id)', () => {
        it('should get school by id', async() => {
            const newSchool = await schools.addSchool(mockSchool);
            const findSchool = await schools.getSchool(newSchool.id);
            expect(findSchool.schoolName).toEqual(newSchool.schoolName)
        })
    })

    describe('remove(id)', () => {
        it('should remove schools', async () => {
            const newSchool = await schools.addSchool(mockSchool);
            const removedSchool = await schools.removeSchool(newSchool);
            expect(removedSchool).toEqual(0)

        })
    })
})