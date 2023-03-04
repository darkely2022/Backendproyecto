const {listcomuna} = require('../services/comunas.service');

const list = async (req, res) => {
    try {
        const comunas = await listcomuna() // ComunaService.listcomuna()
        res.json({
            comunas: comunas,
        });
        console.log("controller comunas")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller comunas",
        });
    }
}

module.exports = {
    list,
};