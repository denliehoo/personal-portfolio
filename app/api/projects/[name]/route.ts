import { connectToDatabase } from "@/src/utils";
import { NextRequest, NextResponse } from "next/server";

// /api/projects/[name]

export async function GET(request: NextRequest, { params }: any) {
  const { client, db } = await connectToDatabase();
  const project = await db
    .collection("projects")
    .findOne({ path: params.name });
  if (!project) return null;

  const pinned = await db
    .collection("projects")
    .find()
    .sort({ importance: -1 })
    .limit(3)
    .toArray();

  const isPinned = pinned.some((p: any) => p.path === params.name);

  client.close();
  console.log("fetching project", params.name);
  return NextResponse.json({ ...project, isPinned: isPinned });
}
