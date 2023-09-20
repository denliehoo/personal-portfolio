import { connectToDatabase } from "@/src/utils";
import { NextRequest, NextResponse } from "next/server";

// /api/projects

export async function GET(request: NextRequest, { params }: any) {
  const { client, db } = await connectToDatabase();
  const project = await db
    .collection("projects")
    .findOne({ path: params.name });
  client.close();
  console.log("fetching project", params.name);
  return NextResponse.json(project);
}
