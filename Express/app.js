// Calling Express package
const express = require("express");
const path = require("path");
const app = express();
const port = 80;
// For Serving Static Files
app.use('/static', express.static('static'));
// Set the Template Engine as pug
app.set('view engine', 'pug');
// Set the Views/Templates Directory
app.set('views', path.join(__dirname, 'views'));
// Our pug demo end-point
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Pratham!', message: 'Hello there! and Welcome to Your First Pug Project!' })
})
// It will host at localhost, localhost/, localhost:80, localhost:80/ when GET Request
app.get("/", (req, res) => {
    res.status(200).send("This is My HomePage First Express App of Pratham");
});
// It will host at localhost/about, localhost:80/about when GET Request
app.get("/about", (req, res) => {
    res.send("This is My About Us of GET Request First Express App of Pratham");
});
// It will host at localhost/about, localhost:80/about when POST Request
app.post("/about", (req, res) => {
    res.send("This is My About Us of POST Request First Express App of Pratham");
});
app.get("/this", (req, res) => {
    res.status(404).send("This Page Cannot Be Found!");
});
// It will listen to the port 
app.listen(port, () => {
    console.log(`The Application started successfully on port ${port} `);
})

// localhost:80 or localhost
// It will serve on both as both means same