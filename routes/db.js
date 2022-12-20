const express = require('express')
const router = express.Router();

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = "e-comm";

async function getData(){
    const result = await client.connect();
    const db = result.db(database); 
    const collection = db.collection("products");
    const response = await collection.find({brand:"samsung"}).toArray();
    console.log(response)
}

getData()

module.exports = router