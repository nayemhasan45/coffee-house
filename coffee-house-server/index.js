const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.COFFE_DB}:${process.env.COFFE_PASS}@cluster1.szp5gbl.mongodb.net/?retryWrites=true&w=majority&appName=cluster1`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 10000,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 10000,
});

// Connect to MongoDB once
let coffeeCollection;
let isConnected = false;

async function connectToMongoDB() {
  if (isConnected) return coffeeCollection;
  
  try {
    await client.connect();
    coffeeCollection = client.db("coffeeDB").collection("coffees");
    isConnected = true;
    console.log("Connected to MongoDB!");
    return coffeeCollection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    isConnected = false;
    throw error;
  }
}

// Routes
app.get("/coffees", async (req, res) => {
  try {
    const collection = await connectToMongoDB();
    const result = await collection.find().toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch coffees" });
  }
});

app.get("/coffe-details/:id", async (req, res) => {
  try {
    const collection = await connectToMongoDB();
    const id = new ObjectId(req.params.id);
    const result = await collection.findOne({ _id: id });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch coffee details" });
  }
});

app.post("/add-coffe", async (req, res) => {
  try {
    const collection = await connectToMongoDB();
    const newCoffee = req.body;
    console.log(newCoffee);
    const result = await collection.insertOne(newCoffee);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to add coffee" });
  }
});

app.put('/coffees/:id', async (req, res) => {
  try {
    const collection = await connectToMongoDB();
    const id = new ObjectId(req.params.id);
    const updateCoffee = req.body;
    const result = await collection.updateOne(
      {_id: id},
      {$set: updateCoffee},
      {upsert: true}
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to update coffee" });
  }
});

app.delete('/coffees/:id', async (req, res) => {
  try {
    const collection = await connectToMongoDB();
    const id = new ObjectId(req.params.id);
    const result = await collection.deleteOne({_id: id});
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to delete coffee" });
  }
});

app.get("/", (req, res) => {
  res.send("hello from coffe server");
});

// Export the app for Vercel
module.exports = app;
