import { connectToDatabase } from "@/src/utils";
import { NextResponse } from "next/server";

// /api/experiences

export async function GET() {
  const { client, db } = await connectToDatabase();
  const experiences = await db.collection("experiences").find().toArray();
  client.close();
  console.log("fetching experiences");
  return NextResponse.json(experiences);
}
