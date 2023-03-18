const { pool } = require('./database');

const findAll = async () => {
    try {
        const  {rows} = await pool.query('SELECT * FROM usuario');
        return rows
    } catch (err) {
        console.log("error database lectura usuario");
        throw err;
    }
}

const findOne = async (id) => {
    try {
        const consulta ='SELECT * FROM usuario where id = $1';
        const values = [id ]
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


const findOnePassword = async (username, password) => {
    try {
        const consulta ='SELECT tipo_usuario_id FROM usuario where id = $1 and password = $2';
        const values = [username,password ]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos usuario/pass")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database usuario");
        console.log(pool);
        throw err;
        
    }
}


const CreateUsuario = async (id, tipo_usuario_id, password) => {
    try {
        const consulta = "INSERT INTO usuario  values ($1, $2,$3)"
        const values = [id, tipo_usuario_id, password]
        const result = await pool.query(consulta, values)
        console.log("Usuario agregado")
    } catch (error) {
        console.log("error database grabar usuario");
        console.log(pool);
        throw err;
    }

}

module.exports = {
    findAll,
    findOne,
    findOnePassword,
    CreateUsuario,
};
