import classes from "./index.module.css";

const Loader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}> / </div>
    </div>
  );
};

export default Loader;
