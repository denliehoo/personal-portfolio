import { connectToDatabase } from "@/src/utils";
import { NextResponse } from "next/server";

// /api/experiences

export async function GET() {
  const { client, db } = await connectToDatabase();
  const experiences = await db.collection("experiences").find().toArray();
  let allProjects = await db
    .collection("projects")
    .find()
    .sort({ importance: -1 })
    .toArray();

  const splitArray = (arr: any[], n: number) => {
    if (n <= 0 || n >= arr.length) {
      return [arr, []];
    } else {
      const arr1 = arr.slice(0, n);
      const arr2 = arr.slice(n);
      return [arr1, arr2];
    }
  };

  const [pinned, others] = splitArray(allProjects, 3);
  client.close();
  console.log("fetching about");
  return NextResponse.json({ experiences, pinned, others });
}
