const express = require("express");
const router = express.Router();

// GET /router - Request for getting items
router.get("/router", (request, response) => {
    response.status(200).json({msg: "GET request for /api/router"});
})

// POST /router - Request for updating items
router.post("/router", (request, response) => {
    response.status(201).json({msg: "POST request for /api/router"});
})

// DELETE /router/:id - Request for removing items
router.delete("/router", (request, response) => {
    response.status(200).json({msg: "DELETE request for /api/router"});
})

// PUT /router/:id - Request for adding items
router.put("/router", (request, response) => {
    response.status(200).json({msg: "PUT request for /api/router"});
})

module.exports = router;