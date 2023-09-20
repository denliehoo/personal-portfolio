import Project from "@/src/projects/Project";
import { connectToDatabase } from "@/src/utils";

async function getProjects() {
  const { client, db } = await connectToDatabase();
  const projects = await db.collection("projects").find().toArray();
  client.close();
  return projects;
}

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <div>
      {projects.map((p: any) => (
        <Project
          key={p._id.toString()}
          project={{ ...p, _id: p._id.toString() }}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
