export const getMain = async (host: string) => {
  // potential temporary fix till nextjs addresses this issue
  console.log(host);
  const baseUrl =
    host === "localhost:3000" ? `http://localhost:3000` : `https://${host}`;
  console.log("baseUrl is", baseUrl);
  console.log("request made to: ", `${baseUrl}/api/main`);
  // const res = await fetch(
  //   process.env.URL + "/api/main",
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
  console.log(res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
