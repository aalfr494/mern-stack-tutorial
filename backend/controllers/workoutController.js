const Workout = require('../models/workoutModel')


// GET all workouts

// GET single workout

// CREATE new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    //add document to Database
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({ error: error.message })
        
    }
}

// DELETE a single workout

// UPDATE a single workout

module.exports = {
    createWorkout,
}