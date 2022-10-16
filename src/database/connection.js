import '../setup.js';
import { MongoClient } from 'mongodb';

 const mongoClient = new MongoClient(process.env.MONGO_URI);
//const mongoClient = new MongoClient('mongodb://127.0.0.1:27017')
mongoClient.connect();
const db = mongoClient.db(process.env.DB_NAME);

export default db;
