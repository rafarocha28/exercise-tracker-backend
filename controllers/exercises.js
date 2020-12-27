let Exercise = require("../models/exercise.model");

module.exports = {
  getExercises(request, response) {
    Exercise.find()
      .then((exercises) => response.status(200).json(exercises))
      .catch((error) => response.status(400).json(error));
  },
  addExercise(request, response) {
    const { username, description } = request.body;
    const duration = Number(request.body.duration);
    const date = Date.parse(request.body.date);

    const newExercise = new Exercise({ username, description, duration, date });

    newExercise
      .save()
      .then(() =>
        response
          .status(200)
          .json(`Exercise ${description} for user ${username} added.`)
      )
      .catch((error) => response.status(400).json(error));
  },
  getExerciseById(request, response) {
    Exercise.findById(request.params.id)
      .then((exercise) => response.status(200).json(exercise))
      .catch((error) => response.status(400).json(error));
  },
  deleteExerciseById(request, response) {
    const { id } = request.params;
    Exercise.findByIdAndDelete(id)
      .then(() => response.status(200).json(`Exercise ${id} deleted.`))
      .catch((error) => response.status(400).json(error));
  },
  updateExercise(request, response) {
    const { body } = request;
    const { id } = request.params;
    Exercise.findById(id)
      .then((exercise) => {
        exercise.username = body.username;
        exercise.description = body.description;
        exercise.duration = Number(body.duration);
        exercise.date = Date.parse(body.date);

        exercise
          .save()
          .then(() => response.status(200).json(`Exercise ${id} updated.`))
          .catch((error) => response.status(400).json(error));
      })
      .catch((error) => response.status(400).json(error));
  },
};
