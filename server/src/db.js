const mongoose = require('mongoose');
require("dotenv").config();

async function connect() {
    mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB!`)
}

connect().catch(err => console.log(err));

const todoSchema = new mongoose.Schema({
    status: Boolean,
    task: String
});

const Todo =  mongoose.models.Todo || mongoose.model('Todo', todoSchema);

module.exports = { connect };