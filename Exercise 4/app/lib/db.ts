// @ts-ignore - mongodb package is not installed in the exercise yet
import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.MONGO_URI; // Halkan ayaan ka saxnay MANGO_URI oo ka dhignay MONGO_URI

if (!uri) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
}

let client: MongoClient;
let db: Db;

// Haddii aad rabto inaad connection-ka samayso (Tusaale ahaan):
export async function connectToDatabase() {
    if (client && db) {
        return { client, db };
    }

    client = new MongoClient(uri);
    await client.connect();
    db = client.db("todo_app"); // Beddel magacaaga database-ka

    return { client, db };
}

export async function getCollection(collectionName: string): Promise<Collection> {
    const { db: database } = await connectToDatabase
    ();
    return db.collection("todos");
}

