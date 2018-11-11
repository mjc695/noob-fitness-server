const router = require('express').Router();
const { User, UserExercise, Workout } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allUserExercises = await UserExercise.findAll();
    res.json(allUserExercises);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    allWorkouts = await Workout.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    curUserExercise = allWorkouts.map(async workout => {
      return await UserExercise.findAll({
        where: {
          workoutId: workout.id,
        },
      });
    });
    // curUserExercise = await UserExercise.findAll({
    //   where: {
    //     workoutId: req.params.workoutId,
    //   },
    // });
    res.json(curUserExercise);
  } catch (err) {
    next(err);
  }
});

router.post('/:userId', async (req, res, next) => {
  try {
    let allWorkouts = Workout.findAll({
      where: {
        userId: req.params.id,
      },
    });
    if (allWorkouts.length) {
      req.body.workoutId = allWorkouts[allWorkouts.length - 1].id;
    } else {
      const newWorkout = Workout.create({ userId: 1 });
      req.body.workoutId = newWorkout.id;
    }
    console.log('req.body in post request', req.body);
    newUserExercise = await UserExercise.create(req.body);
    res.json(newUserExercise);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
