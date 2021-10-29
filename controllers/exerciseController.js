let Exercise = require('../models/exercise.model');

exports.getExercises = (req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
}

//get single exercise
exports.getExercise = (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err))
}

//add exercise
exports.addExercise = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const newExercise = new Exercise({
        name,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(exercise => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error: ' + err))
}
//update exercise
exports.updateExercise = (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.name = req.body.name;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = req.body.date;

        exercise.save()
        .then(() => res.json('Exercise Updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
}

//delete exercise
exports.deleteExercise = (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
}