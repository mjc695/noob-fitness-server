// do associations here

const User = require('./user');
const Exercise = require('./exercise');
const UserExercise = require('./userExercise');

User.hasMany(Workout);
Workout.hasMany(Exercise);
// User.belongsToMany(Exercise, { through: Workout });
// Exercise.belongsToMany(User, { through: Workout });

module.exports = { User, Exercise, UserExercise };
