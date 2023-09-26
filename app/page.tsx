import About from "@/src/components/About/About";
import { getAbout } from "@/src/utils/clientApi";

const HomePage = async () => {
  const about: any = await getAbout();
  const { pinned, others, experiences } = about;

  return <About pinned={pinned} experiences={experiences} others={others} />;
};

export default HomePage;
