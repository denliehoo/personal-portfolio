import ProjectDetails from "@/src/projects/details/ProjectDetails";

const getProject = async (path: string) => {
  const res = await fetch(process.env.URL + "/api/projects/" + path, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
const ProjectDetailsPage = async ({ params }: any) => {
  const project: any = await getProject(params.name);
  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default ProjectDetailsPage;
