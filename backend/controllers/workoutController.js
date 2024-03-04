const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


// GET all workouts

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    try {        
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// GET single workout

const getAWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout'})

    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'No such workout'})
    }
    res.status(200).json(workout)

}

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
    getWorkouts,
    getAWorkout
}