import Experience from "@/src/components/Experiences/Experience";
import { getExperiences } from "@/src/utils/clientApi";

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
