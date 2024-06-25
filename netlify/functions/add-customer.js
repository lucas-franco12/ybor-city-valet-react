const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const body = JSON.parse(event.body);

  try {
    await client.connect();
    const database = client.db('valet');
    const collection = database.collection('customers');
    const result = await collection.insertOne(body);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Customer added successfully', result }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add customer', error }),
    };
  } finally {
    await client.close();
  }
};
