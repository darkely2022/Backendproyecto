const {listpropietario, AgregarPropietario} = require('../services/propietarios.service');

const findOne = async (req, res) => {
    try {
        const { id } = req.params
        const propietarios = await listpropietario(id) // ComunaService.listcomuna()
        res.json({
            propietarios: propietarios,
        });
        console.log("controller propietarios")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller propietarios",
        });
    }
}

const SavePropietario = async (req, res) => {
    try {
       // const { id } = req.params
        const { rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario } = req.body
        console.log(rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario)
        const data = await AgregarPropietario(rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario) // ComunaService.listcomuna()
        res.json({
           message:data
        });
        console.log("controller grabar propietarios")
    } catch (err) {
        res.status(500).json({
            message: "error grabar controller propietarios",
        });
    }
}

module.exports = {
    findOne,
    SavePropietario,
};