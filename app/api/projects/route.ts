import { connectToDatabase } from "@/src/utils";
import { NextResponse } from "next/server";

// /api/projects

export async function GET() {
  const { client, db } = await connectToDatabase();
  const projects = await db.collection("projects").find().toArray();
  client.close();
  console.log("fetching projects...");
  return NextResponse.json(projects);
}
