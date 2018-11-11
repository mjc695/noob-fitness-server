const db = require('./server/db/db');
const { green, red } = require('chalk');
// const User = require('./db/models/user');
const { User, Exercise, UserExercise, Workout } = require('./server/db/models');
// const UserExercise = require('./db/models/userExercise');

const users = [
  {
    firstName: 'Monferd',
    lastName: 'Collin',
    email: 'monmon@email.com',
    password: 123,
  },
];
const exercises = [
  {
    name: 'Deadlift',
    type: 'compound',
    description: 'pick things up and put them down',
  },
  {
    name: 'Squat',
    type: 'compound',
    description: 'makes you look like you are pooping',
  },
  {
    name: 'Bench Press',
    type: 'compound',
    description: 'chest day is every day',
  },
];

const workout = [
  {
    userId: 1,
  },
];
const usersExercise = [
  {
    workoutId: 1,
    exerciseId: 2,
    set: 1,
    rep: 8,
    rest: 40,
    weight: 185,
  },
];

const seed = async () => {
  // console.log(db);
  await db.sync({ force: true });

  await User.bulkCreate(users);
  await Exercise.bulkCreate(exercises);
  await Workout.bulkCreate(workout);
  await Promise.all(usersExercise.map(set => UserExercise.create(set)));

  console.log(green('Seeding success!'));
  await db.close();
};

seed().catch(err => {
  console.error(red('Oh no, something went wrong!'));
  console.error(err);
  db.close();
});
