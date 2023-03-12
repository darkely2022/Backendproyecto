// esta es la capa que tiene la inteligencia aqui va la logica del negocio
const { findOne } = require('../database/auth.repository');
const jwt = require('jsonwebtoken');
//const USERNAME = "test";
//const PASSWORD = "test";

const login = async (username, password) => {
    try {
        const usuarios = await findOne(username, password)
        /*if (USERNAME !== username || PASSWORD !== password) {
            throw new Error("invalid credentials");
        }*/
        if (usuarios.length > 0) {
            const token = jwt.sign({ username, password }, process.env.JWT_SECRET);
            return token
        }
        else {
            return "Usuario y clave no existen"
        }
    } catch (err) {
        console.log("error realizar login servicio");
        throw err;
    }
    // recibe username y password
    // busca en base de datos
    //    -> SELECT * FROM users WHERE username = ? AND password = ?
    // if (result.length > 0) {
    //     return result[0];
    // } else {
    //     throw new Error('user not found')
    // }
}


module.exports = {
    login,
};
