import Experience from "@/src/components/experience";
import { IMainProps } from "@/src/types";
import React, { FC } from "react";

interface IExperiencesList extends Pick<IMainProps, "experiences"> {}

const ExperienceList: FC<IExperiencesList> = ({ experiences }) => {
  return (
    <>
      {/* For testing of experience 
        {/* <Experience key={"asdasdasd"} experience={{ ...exp }} /> */}
      {experiences.map((e) => (
        <Experience
          key={e._id.toString()}
          experience={{ ...e, _id: e._id.toString() }}
        />
      ))}
    </>
  );
};

export default ExperienceList;

// const exp = {
//   _id: "123",
//   date: "NOV 2023 - PRESENT",
//   title: "Software Engineer",
//   company: "Aquariux Fintech",
//   pointers: [
//     "Built a payments gateway and cross-platform trading platform using TypeScript, React and React Native, ensuring seamless experiences across Android, iOS, and web",
//     "Used a micro-frontend and monorepo architecture, and refactored shared components into a GitLab Private Registry",
//     "Integrated multiple third-party services, including TradingView with a custom WebSocket data feed for real-time market data and advanced charting, Sumsub for Compliance, and Mixpanel for data analytics",
//     "Configured CI/CD pipelines with Jenkins, deployed to AWS S3, and set up CloudFront functions",
//   ],
// };
