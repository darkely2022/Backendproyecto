const { pool } = require('./database');

const findAllComunas = async () => {
    try {
        const {rows} = await pool.query('SELECT * FROM comunas');
        console.log("lectura base datos comunas")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database");
        console.log(pool);
        throw err;
        
    }
}

module.exports = {
    findAllComunas,
};
