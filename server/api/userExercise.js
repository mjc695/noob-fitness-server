const { userExercise } = require('../db/models');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const allUserExercises = await userExercise.findAll();
    res.json(allUserExercises);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    curUserExercise = await userExercise.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(curUserExercise);
  } catch (err) {
    console.log(err);
  }
});

router.post('/:userId', async (req, res, next) => {
  try {
    newUserExercise = await userExercise.create(req.body);
    res.json(newUserExercise);
  } catch (err) {
    console.log(err);
  }
});
