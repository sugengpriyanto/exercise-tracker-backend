const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

router.get('/', exerciseController.getExercises);
router.get('/:id', exerciseController.getExercise);
router.post('/add', exerciseController.addExercise);
router.put('/:id', exerciseController.updateExercise);
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router