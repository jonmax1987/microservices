const express = require('express');
const router = express.Router();
const { getAllUsers, updateUser, deleteUser, createUser } = require('../controllers/userController');
const { validateCreateUser, validateUpdateUser } = require('../middleware/validators');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/create', authenticateToken, validateCreateUser, createUser);

router.get('/', authenticateToken, getAllUsers);

router.put('/:id', authenticateToken, validateUpdateUser, updateUser);

router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;
