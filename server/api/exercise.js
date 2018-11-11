const router = require('express').Router();
const { Exercise } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const allExercise = await Exercise.findAll();
    res.json(allExercise);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (err) {
    console.log(err);
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const newExercise = Exercise.create(req.body);
    res.json(newExercise);
  } catch (err) {
    console.log(err);
  }
});
