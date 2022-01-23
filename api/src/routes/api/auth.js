const express = require('express');
const router = express.Router();
const authController = require('../../controllers/api/authController');
const verifyToken = require('../../middlewares/verifyToken');

//Rutas

//Login
router.post('/login', authController.login);
//Me
router.get('/me', /*verifyToken ,*/authController.me);
//Register
router.post('/register', authController.register);


module.exports = router;