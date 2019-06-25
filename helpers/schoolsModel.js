const db = require('../data/dbConfig');

module.exports = {
    getSchools,
    getSchool,
    addSchool,
    updateSchool,
    removeSchool,
};

function getSchools() {
    return db('schools')
}

function getSchool(id) {
    return db('schools')
    .where({ id })
    .first();
}

async function addSchool(school) {
    const [id] = await db('schools').insert(school).returning("id");
    return getSchool(id);
}

function updateSchool(id, changes) {
    return db('schools')
    .where({ id })
    .update(changes);
}

function removeSchool(id) {
    return db('schools')
    .where('id', id)
    .del();
}

