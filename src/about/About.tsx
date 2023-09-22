import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <p>Hi, my name is Denlie.</p>

      <p>
        I’m a Software engineer specialised in full-stack web development and
        blockchain development.
      </p>
      <p>
        The tech stack that I mainly use is React for the frontend, Node.js and
        MongoDB for the backend and Solidity for blockchain development. My
        professional experience mainly revolves around the fintech,
        cryptocurrency and web3 industry.
      </p>
      <p>
        In 2017, I first dabbled in programming during my free time before
        beginning my studies at Nanyang Business School, Nanyang Technological
        University. Initially, I aspired to pursue finance but realized it
        wasn't my passion. During my last semester in 2021, I made a career
        switch, drawn to programming.
      </p>
      <p>
        I began with Microsoft Excel VBA, seeing it as an asset for finance, but
        my interest grew. I took a semester off to learn programming and
        interned at a fintech company, initially in support but later
        transitioning to programming. After completing my degree at the end of
        2021, I officially embraced the role of a web developer.
      </p>
      <p>
        Since then, I've cherished each day as a programmer, continuously honing
        my skills, exploring new technologies, and working on personal projects
        in my free time.
      </p>
    </div>
  );
};

export default About;
