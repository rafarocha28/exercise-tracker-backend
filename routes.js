const router = require("express").Router();

const ExercisesController = require("./controllers/exercises");
const UsersController = require("./controllers/users");

router.get("/exercises/", ExercisesController.getExercises);
router.get("/exercises/:id", ExercisesController.getExerciseById);
router.post("/exercises/add", ExercisesController.addExercise);
router.delete("/exercises/:id", ExercisesController.deleteExerciseById);
router.post("/exercises/update/:id", ExercisesController.updateExercise);

router.get("/users/", UsersController.getUsers);
router.post("/users/add", UsersController.addUser);

module.exports = router;
