const router = require('express').Router();
const { UserExercise } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allUserExercises = await UserExercise.findAll();
    res.json(allUserExercises);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    curUserExercise = await UserExercise.findAll({
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
    console.log('req.body in post request', req.body);
    newUserExercise = await UserExercise.create(req.body);
    res.json(newUserExercise);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
