const { MongoClient } = require("mongodb");
const { connect } = require('./db');
const express = require("express");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const db = client.db('test');
const collection = db.collection('todos');

// GET request - Read todos
const router = express.Router();
router.get('/router', async (req, res) => {
    await client.connect();
    const todos = await collection.find({}).toArray();
    res.status(200).json(todos);
})

// POST request - Create todo
// PUT request - Update todo
// DELETE request - Delete todo

module.exports = router;