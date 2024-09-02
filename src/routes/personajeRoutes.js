const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');

router.get('/', personajeController.getPersonajes);
router.get('/:id', personajeController.getPersonajeById);
router.post('/', personajeController.postPersonaje);
router.put('/:id', personajeController.putPersonaje);
router.delete('/:id', personajeController.deletePersonaje);



module.exports = router;