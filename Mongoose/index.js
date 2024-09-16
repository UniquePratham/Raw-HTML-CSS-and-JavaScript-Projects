// Calling Mongoose 
const mongoose = require('mongoose');
main().catch(err => {
    // console.log(err);
    console.log('We are not connected to MongoDB');
});
// Connecting to MongoDB usin Mongoose
async function main() {
    // await mongoose.connect('mongodb://localhost:27017/test');
    await mongoose.connect('mongodb://localhost:27017/prathamKart');
    console.log('We are connected to MongoDB');
    // Creating Schema --> It is a additional layer for the DataBase which Contains which Field has which Type of Data to be Stored
    const kittySchema = new mongoose.Schema({
        name: String
    });
    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? "Meow! My Name is " + this.name + " ..."
            : "Meow! I don't have a Name... Can You Please Give Me One";
        console.log(greeting);
    };
    // After Schema is Defined, It will be locked as a model i.e It will converted into Kitten Mongoose Model
    // Model is the Complied Form of Schema
    const Kitten = mongoose.model('Kitten', kittySchema);
    // After Creating Model, We can make Objects which will be sent to MongoDB as Documents
    const prathamKitty = new Kitten({ name: 'Shizuka' });
    // const prathamKitty = new Kitten({});
    console.log(prathamKitty.name);
    // await prathamKitty.save();
    prathamKitty.speak();
    const fluffy = new Kitten({ name: "Fluffy" });
    console.log(fluffy.name);
    // await fluffy.save();
    fluffy.speak();
    const kitties = await Kitten.find();
    // const kitties = await Kitten.find({ name: "Shizuka" });
    // const kitties = await Kitten.find({ name: "Fluffy" });
    // const kitties = await Kitten.deleteMany({ name: "Shizuka", name: "Fluffy" });
    // const kitties = await Kitten.deleteMany({ name: "Shizuka" });
    // All Commands can be used here of MongoDB
    console.log(kitties);
}