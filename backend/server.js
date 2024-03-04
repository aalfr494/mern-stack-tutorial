require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// this starts the Express app
const app = express();

// register basic middleware

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// call our routes, set paths
app.use("/api/workouts", workoutRoutes);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to DB and listening on port 5000!!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
