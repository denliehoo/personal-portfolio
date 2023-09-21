export const getProject = async (path: string) => {
  const res = await fetch(process.env.URL + "/api/projects/" + path, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getProjects = async () => {
  const res = await fetch(process.env.URL + "/api/projects", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getExperiences = async () => {
  const res = await fetch(process.env.URL + "/api/experiences", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
