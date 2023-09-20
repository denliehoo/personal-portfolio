import ProjectDetails from "@/src/projects/details/ProjectDetails";
import { connectToDatabase } from "@/src/utils";

async function getProject(path: string) {
  const { client, db } = await connectToDatabase();
  const project = await db.collection("projects").findOne({ path: path });
  client.close();
  return project;
}
const ProjectDetailsPage = async ({ params }: any) => {
  const project: any = await getProject(params.name);
  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default ProjectDetailsPage;
