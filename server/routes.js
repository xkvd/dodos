const { getClient } = require("./database");
const { ObjectId } = require("mongodb");
const express = require("express");

const router = express.Router();

const getCollection = () => {
    const client = getClient();
    const collection = client.db("dodosdb").collection("dodos");
    return collection;
}

// GET /router - Request for getting items
router.get("/router", async (request, response) => {
    const collection = getCollection();
    const todos = await collection.find({}).toArray();

    response.status(200).json(todos);
})

// POST /router - Request for updating items
router.post("/router", async (request, response) => {
    const collection = getCollection();
    let { todo } = request.body;

    if (!todo) {
        return response.status(400).json({ msg: "No TODO found!"})
    }

    todo = (typeof todo === "string") ? todo : JSON.stringify(todo);

    const NewTodo = await collection.insertOne({todo, status: false});

    response.status(201).json({todo, status: false, _id: NewTodo.insertedId });
})

// DELETE /router/:id - Request for removing items
router.delete("/router/:id", async (request, response) => {
    const collection = getCollection();
    const _id = new ObjectId(request.params.id);

    const deletedTodo = await collection.deleteOne({ _id });

    response.status(200).json(deletedTodo);
})

// PUT /router/:id - Request for adding items
router.put("/router/:id", async (request, response) => {
    const collection = getCollection();
    const _id = new ObjectId(request.params.id);
    const { status } = request.body;

    if (typeof status != "boolean") {
        return response.status(400).json({msg: "Invalid status"});
    }

    const updatedTodo = await collection.updateOne({ _id }, { $set: {status: !status} });

    response.status(200).json(updatedTodo);
})

module.exports = router;