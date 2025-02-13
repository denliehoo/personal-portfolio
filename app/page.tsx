import Main from "@/src/components/Main/Main";
import { getMain } from "@/src/utils/clientApi";
import { headers } from "next/headers";

const HomePage = async () => {
  const host = headers().get("host");

  const main = await getMain(host || "");
  const { pinned, others, experiences } = main;

  return <Main pinned={pinned} experiences={experiences} others={others} />;
};

export default HomePage;
