const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getAWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

const router = express.Router();

// get all of the workouts
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getAWorkout);

// POST a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);
// update a workout
router.patch("/:id", updateWorkout);

router.get("/", () => {});

module.exports = router;
