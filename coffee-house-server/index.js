const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

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
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const coffeeCollection = client.db("coffeeDB").collection("coffees");
    // get all data form db
    app.get("/coffees", async (req, res) => {
      const result = await coffeeCollection.find().toArray();
      res.send(result);
    });
    // get data with a id
    app.get("/coffe-details/:id", async (req, res) => {
      const id = new ObjectId(req.params.id);
      const result = await coffeeCollection.findOne({ _id: id });
      // console.log('result get :',result);
      res.send(result);
    });
    // Routes - Define INSIDE run() after connection
    app.post("/add-coffe", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);

      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    // update a item 
    app.put('/coffees/:id',async(req,res)=>{
      const id = new ObjectId(req.params.id);
      const updateCoffee = req.body;
      const result = await coffeeCollection.updateOne(
        {_id:id},
        {$set:updateCoffee},
        {upsert:true}
      );
      res.send(result);
    })
    // delete a item
    app.delete('/coffees/:id',async(req,res)=>{
      const id =new ObjectId(req.params.id);
      const result = await coffeeCollection.deleteOne({_id:id});
      res.send(result);
    })
    app.get("/", (req, res) => {
      res.send("hello from coffe server");
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Start server AFTER routes are defined
    app.listen(port, () => {
      console.log("coffe server is running on port : ", port);
    });
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);
