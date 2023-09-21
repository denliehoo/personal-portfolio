import Link from "next/link";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.eyes} />

      <div className={classes.textContainer}>
        <div className={classes.notFound}>404 | Page Not Found</div>
        <Link href="/"> &#8592; Back To Home </Link>
      </div>
    </div>
  );
};

export default NotFound;
