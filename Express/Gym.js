// Calling Express package
const express = require("express");
const fs = require('fs');
const path = require("path");
const app = express();
const port = 80;

// Express Specific Stuff
app.use('/static', express.static('static')); // --> For Serving Static Files
app.use(express.urlencoded()); // --> For bring POST Request Form Data to Express

// Pug Specific Stuff
app.set('view engine', 'pug'); // --> Set the Template Engine as pug
app.set('views', path.join(__dirname, 'views')); // --> Set the Views/Templates Directory

// End - Points

// 1. GET Request
app.get('/', (req, res) => {
    // const con = "This is the Best Content for PUBG Game so far !!!";
    // const params = { 'title': 'PUBG is the Best Game', "content": con };
    // res.status(200).render('index.pug', params);
    res.status(200).render('Gym.pug');
})

// 2. POST Request
app.post('/', (req, res) => {
    // Checking for inputs coming here or not of forms
    console.log(req.body);
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;
    // Assigning data into a string for storing in in a txt file
    let outputToWrite = `The Name of the Client is ${name} with Age ${age} Years Old & Gender ${gender} residing at ${address}. More about Our CLient: ${more}`;
    // Making an output.txt file whenever user submitted the gym's form
    fs.writeFileSync('output.txt', outputToWrite);
    const params = { 'message': 'Your Form has been Submitted Successfully!' };
    res.status(200).render('Gym.pug', params);
})
// Start the Server
app.listen(port, () => {
    console.log(`The Application started successfully on port ${port} `); // --> It will listen to the port 
})

// localhost:80 or localhost
// It will serve on both as both means same