import { IMainProps } from "../types";

export const getMain = async (host: string): Promise<IMainProps> => {
  // Note: To clear cache in Vercel select the project, go to Settings > Data Cache > Purge Cache > Click the "Purge Everything" button
  // potential temporary fix till nextjs addresses this issue
  // console.log(host);
  const baseUrl =
    host === "localhost:3000" ? `http://localhost:3000` : `https://${host}`;

  console.log("Fetching Main Api");
  const res = await fetch(
    `${baseUrl}/api/main`,
    // {
    //   cache: "force-cache",
    // }
    // fetch new data once a day
    {
      next: { revalidate: 86400 },
      headers: {
        Authorization: process.env.API_KEY || "",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  console.log("API res: ", res);

  return res.json();
};
