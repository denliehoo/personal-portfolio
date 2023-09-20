import Experience from "@/src/experiences/Experience";

async function getExperiences() {
  const res = await fetch(process.env.URL + "/api/experiences", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ExperiencesPage = async () => {
  const experiences = await getExperiences();

  return (
    <div>
      {experiences.map((e: any) => (
        <Experience
          key={e._id.toString()}
          experience={{ ...e, _id: e._id.toString() }}
        />
      ))}
    </div>
  );
};

export default ExperiencesPage;
