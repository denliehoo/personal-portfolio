import Link from "next/link";
import classes from "./NotFoundOrError.module.css";

const NotFoundOrError: React.FC<{ isError: boolean }> = ({ isError }) => {
  return (
    <div className={classes.container}>
      <div className={classes.eyes} />

      <div className={classes.textContainer}>
        {isError ? (
          <div>
            <div>An Unknown Error Occured...</div>
            <div>Try Again Later</div>
          </div>
        ) : (
          <div>404 | Page Not Found</div>
        )}

        <Link href="/"> &#8592; Back To Home </Link>
      </div>
    </div>
  );
};

export default NotFoundOrError;
