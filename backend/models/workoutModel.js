// Mongoose lets us create these models and schemas for the DB
// MongoDB ALONE is schema-less

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// this creates our Model
// first argument, it pluralizes this and makes it a Collection
// which we see logged into our MongoDB site
module.exports = mongoose.model('Workout', workoutSchema)