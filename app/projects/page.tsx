import Project from "@/src/components/Projects/Project";
import { getProjects } from "@/src/utils/clientApi";

const ProjectsPage = async () => {
  const projects: any = await getProjects();

  return (
    <>
      {projects.map((p: any) => (
        <Project
          key={p._id.toString()}
          project={{ ...p, _id: p._id.toString() }}
        />
      ))}
    </>
  );
};

export default ProjectsPage;
