import Project from "@/src/projects/Project";

const getProjects = async () => {
  const res = await fetch(process.env.URL + "/api/projects", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

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
