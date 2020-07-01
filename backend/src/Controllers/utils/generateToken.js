const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auh.json');

module.exports = function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, { expiresIn: 86000 });
};
