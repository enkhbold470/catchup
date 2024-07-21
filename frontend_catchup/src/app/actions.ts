import clientPromise from '@/lib/mongodb';

const { MongoClient } = require('mongodb');

export async function fetchArticles() {
	const { MongoClient } = require('mongodb');
	const uri = process.env.MONGODB_URI;
	const client = new MongoClient(uri);

	let data = [];
	try {
		await client.connect();
		console.log('Connected to MongoDB');
		data = await client.db('catchup').collection('articles').find({}).toArray();
	} catch (error) {
		console.error('Failed to connect to MongoDB', error);
	} finally {
		await client.close();
		console.log('Disconnected from MongoDB');
	}

	return data;
}

export async function fetchTags() {
	const client = await clientPromise;
	const db = client.db('catchup');
	const collection = db.collection('tags');
	const data = await collection.find({}).toArray();
	return data;
}
