// primera capa q se enfrenta el cliente para hacer la gestion 

const userService = require('../services/auth.service')

const login = (req, res) => {
    try {
        const { username, password } = req.body;
        const token = userService.login(username, password)
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

const register = (req, res) => {
    res.status(500).json({
        message: "not implemented",
    });
};

module.exports = {
    login,
    register,
};
