const router = require('express').Router();
const { Exercise } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const exercise = await Exercise.findAll();
    res.json(exercise);
  } catch (err) {
    console.log(err);
  }
});
