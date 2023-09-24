import ProjectDetails from "@/src/components/Projects/Details/ProjectDetails";
import { getProject } from "@/src/utils/clientApi";
import { redirect } from "next/navigation";

const ProjectDetailsPage = async ({ params }: any) => {
  const project: any = await getProject(params.name);
  // if (!project) throw new Error("Project doesn't exist");
  if (!project) redirect("/not-found");
  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default ProjectDetailsPage;
