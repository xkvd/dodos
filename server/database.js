require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        deprecationErorrs: true,
        strict: true,
    }
}

let client;

const connectMongoDB = async() => {
    if (!client) {
        try {
            client = await MongoClient.connect(uri, options);
            console.log("Connected to MongoDB!");
        } catch (error) {
            console.log(error);
        }
    }
    return client;
}

const getClient = () => client;

module.exports = { connectMongoDB, getClient };