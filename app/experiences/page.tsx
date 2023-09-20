// import classes from "./Experiences.module.css";

import Experience from "@/src/experiences/Experience";
import { connectToDatabase } from "@/src/utils";

async function getExperiences() {
  const { client, db } = await connectToDatabase();
  const experiences = await db.collection("experiences").find().toArray();
  client.close();
  return experiences;
}

const Experiences = async () => {
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

export default Experiences;
