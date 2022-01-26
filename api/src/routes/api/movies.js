const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

//Middlewares

const verifyToken = require('../../middlewares/verifyToken');

//Rutas

//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/search', verifyToken ,moviesController.search);
//Listado de películas
router.get('/', verifyToken ,moviesController.list);
//Detalle de una película
router.get('/:id', verifyToken ,moviesController.detail);
//Agregar una película
router.post('/create', verifyToken , moviesController.create);
//Modificar una película
router.put('/update/:id', verifyToken , moviesController.update);
//Eliminar una película
router.delete('/delete/:id', verifyToken , moviesController.destroy);


module.exports = router;