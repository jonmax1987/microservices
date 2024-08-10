const jwt = require('jsonwebtoken');
const ApiResponse = require('../utils/ApiResponse');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const token = req.cookies.token || '';

    if (!token) {
        return res.status(403).json(new ApiResponse('fail', 'No token provided'));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json(new ApiResponse('fail', 'Invalid token'));
    }
}

module.exports = {
    authenticateToken
};
