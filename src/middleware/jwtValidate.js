// interceptor de capa de rutas
const jwt = require('jsonwebtoken');

const validateJwt = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('Bearer ')[1] || '';
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next()
    } catch (err) {
        res.status(401).json({
            "message": "token invalido",
        });
    }
}

module.exports = validateJwt;
