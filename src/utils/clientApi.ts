export const getMain = async () => {
  const res = await fetch(
    process.env.URL + "/api/main",
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

  return res.json();
};
