const express = require("express");
const router = require("./routes");

const app = express();
const port = 5000;

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})