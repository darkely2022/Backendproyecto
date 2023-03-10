const { listapoderado, AgregarApoderado} = require('../services/apoderados.service');

const findOne = async (req, res) => {
    try {
        const { id } = req.params
        const apoderados = await listapoderado(id) 
        res.json({
            apoderados: apoderados,
        });
        console.log("controller apoderados")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller apoderados",
        });
    }
}

const SaveApoderado = async (req, res) => {
    try {
       // const { id } = req.params
        const { rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado}=req.body 
        console.log(rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado)
        const data = await AgregarApoderado(rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado)
        res.json({
           message:data
        });
        console.log("controller grabar apoderados")
    } catch (err) {
        res.status(500).json({
            message: "error grabar controller apoderados",
        });
    }
}

module.exports = {
    findOne,
    SaveApoderado,
};