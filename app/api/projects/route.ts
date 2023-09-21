import { connectToDatabase } from "@/src/utils";
import { NextResponse } from "next/server";

// /api/projects

export async function GET() {
  const { client, db } = await connectToDatabase();
  // highest to lowest importance
  const projects = await db
    .collection("projects")
    .find()
    .sort({ importance: -1 })
    .toArray();

  console.log(projects);
  client.close();
  console.log("fetching projects...");
  return NextResponse.json(projects);
}
