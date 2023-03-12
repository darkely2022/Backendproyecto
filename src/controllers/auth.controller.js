// primera capa q se enfrenta el cliente para hacer la gestion 

const {login} = require('../services/auth.service')

const Loguear = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await login(username, password)
        res.status(200).json({
            token: token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "login error",
        });
    }
};


module.exports = {
    Loguear,
};
