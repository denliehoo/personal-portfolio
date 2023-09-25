import About from "@/src/components/About/About";
import { getExperiences, getProjects } from "@/src/utils/clientApi";

const HomePage = async () => {
  const projects: any = await getProjects();
  const experiences = await getExperiences();

  return <About projects={projects} experiences={experiences} />;
};

export default HomePage;
