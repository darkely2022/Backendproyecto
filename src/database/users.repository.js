const { pool } = require('./database');

const findAll = async () => {
    try {
        const result = await pool.query('SELECT * FROM users');
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findAll,
};
