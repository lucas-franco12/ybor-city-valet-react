const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async function(event, context) {
  try {
    await client.connect();
    const database = client.db('valet');  
    const collection = database.collection('customers');  
    const customers = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(customers),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch customers', error }),
    };
  } finally {
    await client.close();
  }
};