const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController');
const ensureToken = require('../../middlewares/ensureToken');

//Rutas
//Register
router.post('/register', usersController.register);
//Login
router.post('/login', usersController.login);

//Login
router.get('/auth', ensureToken , usersController.auth);

module.exports = router;