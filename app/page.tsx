import Main from "@/src/components/Main/Main";
import { getMain } from "@/src/utils/clientApi";

const HomePage = async () => {
  const main: any = await getMain();
  const { pinned, others, experiences } = main;

  return <Main pinned={pinned} experiences={experiences} others={others} />;
};

export default HomePage;
