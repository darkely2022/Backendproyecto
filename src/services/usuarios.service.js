// esta es la capa que tiene la inteligencia aqui va la logica del negocio
const { findOne , findAll, findOnePassword ,CreateUsuario } = require('../database/users.repository');

const findUsuario = async (id) => {
    try {
        const usuarios = await findOne(id)
        if (usuarios.length > 0) {
            
            return usuarios
        }
        else {
            return "Usuario no existe"
        }
    } catch (error) {
        console.log("error realiza usuario servicio");
        throw err;
    }
   
}

const listusuarios = async () => {
    try {
        const usuarios = await findAll()
        console.log("lectura servicios usuarios")
        console.log(usuarios)
        return usuarios;
    } catch (err) {
        console.log("error usuarios servicio");
        throw err;
    }
}


const findUserPass = async (username, password) => {
    try {
        const usuarios = await findOne(username, password)
        if (usuarios.length > 0) {
            
            return usuarios
        }
        else {
            return "Usuario no existe"
        }
    } catch (error) {
        console.log("error realiza usuario servicio");
        throw err;
    }
   
}

const AgregarUsuario = async (id, tipo_usuario_id, password) => {
    try {
        const usuarios = await findOne(id, password)

        if (usuarios.length > 0) {
            console.log("usuarios ya existe");
            return "Usuario ya existe"
        }
        else {
            const usuario = await CreateUsuario(id, tipo_usuario_id, password)
            console.log("Grabar servicio usuario")
            return "Usuario creado"
        }
    } catch (error) {
        console.log("error grabar usuario servicio");
        throw err;
    }

}

module.exports = {
    findUsuario,
    listusuarios,
    findUserPass,
    AgregarUsuario,
};
