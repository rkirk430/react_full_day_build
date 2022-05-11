// ================================================================================================================
                            // Setting up our Server
// ================================================================================================================

// Step 1: Import Dependencies
const express = require('express');
const cors = require('cors');

// Step 2: Import JSON Files
const projects = require("./projects.json");
const about = require("./about.json");

//Step 3: Create our APP Project
const app = express();

//Step 4: Create Middleware
app.use(cors());

//Home Route for Testing our App
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Route for Retrieving Projects in projects.json
app.get("/projects", (req, res) => {
    res.json(projects);
});


//Route for retrieving about info in about.json
app.get("/about", (req, res) => {
    res.json(about);
});

//Declare Port Number
const PORT = process.env.PORT || 4050;

//Turn on the Server Listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


//--Heroku Set Up -- Follow Notion Steps --> Test Here: https://express-react-rk.herokuapp.com/
