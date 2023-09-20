import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const DB_URL = process.env.REACT_APP_DB_URL;

  const client = await MongoClient.connect(DB_URL!);
  const db = client.db();

  return { client, db };
}
