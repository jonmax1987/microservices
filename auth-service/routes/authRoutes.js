const express = require('express');
const router = express.Router();
const { register, login, logout, validateToken } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { validateRegister, validateLogin } = require('../middleware/validators');

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.post('/logout', logout);
router.get('/validate-token', authenticateToken, validateToken);

module.exports = router;
