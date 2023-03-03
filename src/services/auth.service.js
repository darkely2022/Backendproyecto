// esta es la capa que tiene la inteligencia aqui va la logica del negocio
const jwt = require('jsonwebtoken');

const USERNAME = "test";
const PASSWORD = "test";

const login = (username, password) => {

    if (USERNAME !== username || PASSWORD !== password) {
        throw new Error("invalid credentials");
    }

    const token = jwt.sign({ username, password }, process.env.JWT_SECRET);
    return token

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
