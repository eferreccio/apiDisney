const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

//Rutas

//Listado de películas
router.get('/', moviesController.list);
//Detalle de una película
router.get('/:id', moviesController.detail);
//Agregar una película
router.post('/create', moviesController.create);
//Modificar una película
router.put('/update/:id', moviesController.update);
//Eliminar una película
router.delete('/delete/:id', moviesController.destroy);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/search', moviesController.search);

module.exports = router;