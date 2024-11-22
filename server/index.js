const { connectMongoDB } = require("./database");
const express = require("express");

require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

const router = require("./routes");
app.use(express.json());
app.use("/api", router);

async function serve() {
    await connectMongoDB();
    app.listen(port, () => {
        console.log(`Server listening on port ${port}...`)
    })
}

serve();