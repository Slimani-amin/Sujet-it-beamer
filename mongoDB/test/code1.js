const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('mydb');
        const collection = database.collection('users');
        const result = await collection.insertOne({ name: 'Alice', age: 25 });
        console.log(`Document inséré avec l'ID : ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);