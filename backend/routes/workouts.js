const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getAWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// get all of the workouts
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getAWorkout);

// POST a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});
// update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE workout" });
});

router.get("/", () => {});

module.exports = router;
