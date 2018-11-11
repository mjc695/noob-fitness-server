// do associations here

const User = require('./user');
const Exercise = require('./exercise');
const UserExercise = require('./userExercise');
const Workout = require('./userWorkout');

User.hasMany(Workout);
Workout.belongsTo(User);

Workout.hasMany(UserExercise);
UserExercise.belongsTo(Workout);

UserExercise.belongsTo(Exercise);
Exercise.hasMany(UserExercise);
// User.belongsToMany(Exercise, { through: Workout });
// Exercise.belongsToMany(User, { through: Workout });

module.exports = { User, Exercise, UserExercise, Workout };
