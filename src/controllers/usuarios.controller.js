// primera capa q se enfrenta el cliente para hacer la gestion 

const {findUsuario,listusuarios,AgregarUsuario} = require('../services/usuarios.service')

const findOneUsuario = async (req, res) => {
    try {
        const { id } = req.body;
        const usuarios = await findUsuario(id) 
        res.status(200).json({
            usuarios: usuarios,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "busqueda usuario error",
        });
    }
};


const list = async (req, res) => {
    try {
        const usuarios = await listusuarios() 
        res.json({
            usuarios: usuarios,
        });
        console.log("controller lista usuarios")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller lista usuarios",
        });
    }
}

const SaveUsuario = async (req, res) => {
    try {
        const { id, tipo_usuario_id, password}=req.body 
        console.log(id, tipo_usuario_id, password)
        const data = await AgregarUsuario(id, tipo_usuario_id, password)
        res.json({
           message:data
        });
        console.log("controller grabar usuario")
    } catch (err) {
        res.status(500).json({
            message: "error grabar controller usuario",
        });
    }
}

module.exports = {
    findOneUsuario,
    list,
    SaveUsuario,
};
