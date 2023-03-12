const { pool } = require('./database');

const findOne = async (username, password) => {
    try {
        const consulta ='SELECT * FROM usuario where id = $1 and password = $2';
        const values = [username,password ]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos usuario")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database usuario");
        console.log(pool);
        throw err;
        
    }
}

module.exports = {
    findOne,
};