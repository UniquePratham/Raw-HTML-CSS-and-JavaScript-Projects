// Calling Express, Path, & Mongoose package
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const port = 8000;
// Mongoose Specific Stuff
main().catch(err => {
    // console.log(err);
    console.log('We are not connected to MongoDB');
});
// Connecting to MongoDB usin Mongoose
async function main() {
    await mongoose.connect('mongodb://localhost:27017/contactDance');
    console.log('We are connected to MongoDB');
}
// Defining Mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Express Specific Stuff
app.use('/static', express.static('static')); // --> For Serving Static Files
app.use(express.urlencoded({ extended: true })); // --> For bring POST Request Form Data to Express

// Pug Specific Stuff
app.set('view engine', 'pug'); // --> Set the Template Engine as pug
app.set('views', path.join(__dirname, 'views')); // --> Set the Views/Templates Directory

// End - Points

// 1. GET Request
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.status(200).send("Your Form has been Sent & Saved to the DataBase Successfully !!! ");
        // setTimeout(() => {
        //     res.status(200).render('home.pug');
        // }, 3000);
    }).catch(() => {
        res.status(400).send("Sorry! Problem Encountered. Your Form was not Saved to the DataBase...");
    })
})
// Start the Server
app.listen(port, () => {
    console.log(`The Application started successfully on port ${port} `); // --> It will listen to the port 
})