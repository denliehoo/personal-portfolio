"use client";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import MenuNavbar from "../Navbar/MenuNavbar";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";
import { useEffect, useRef, useState } from "react";
import Backdrop from "../Modal/Backdrop";
import Loader from "../Loader/Loader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowSize();
  const [backdrop, setBackDrop] = useState(true);
  const [renderCount, setRenderCount] = useState(0);
  const rightDivRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState("about");
  const [clickMenuCount, setClickMenuCount] = useState(0);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Function to call the child function
  useEffect(() => {
    setRenderCount(1);
  }, []);
  useEffect(() => {
    // width is 0px upon first render. Hence, we put renderCount(1) on the first render
    // to "delay" it. And then, we setBackdrop to false only when renderCount is 1 (i.e. after )
    // we have the width. As such, this would:
    // should the menunavbar upon entering the first time (if less than 680)
    // or, show the loading screen and backdrop if > 680 for the first time
    renderCount === 1 && setBackDrop(false);
  }, [renderCount]);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {backdrop && (
          <Backdrop isOpen={backdrop} onClose={() => {}}>
            <Loader />
          </Backdrop>
        )}

        <div className={classes.left}>
          <Navbar rightDivRef={rightDivRef} setActive={setActive} />
        </div>
        <div className={classes.top}>
          <div className={classes.topContainer}>
            <div>
              <div className={classes.name}>DENLIE HOO</div>
              <div className={classes.active}>
                {capitalizeFirstLetter(active)}
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                onClick={() => setClickMenuCount(clickMenuCount + 1)}
                className={classes.icon}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
          </div>
          <MenuNavbar
            isJustOpened={backdrop}
            active={active}
            clickMenuCount={clickMenuCount}
            width={width}
          />
        </div>

        <div className={classes.right} ref={rightDivRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
// "use client";
// import { useWindowSize } from "@/src/hooks/useWindowSize";
// import MenuNavbar from "../Navbar/MenuNavbar";
// import Navbar from "../Navbar/Navbar";
// import classes from "./Layout.module.css";
// import { useEffect, useRef, useState } from "react";
// import Backdrop from "../Modal/Backdrop";
// import Loader from "../Loader/Loader";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const { width } = useWindowSize();
//   const [backdrop, setBackDrop] = useState(true);
//   const [renderCount, setRenderCount] = useState(0);
//   const rightDivRef = useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = useState("about");

//   useEffect(() => {
//     setRenderCount(1);
//   }, []);
//   useEffect(() => {
//     // width is 0px upon first render. Hence, we put renderCount(1) on the first render
//     // to "delay" it. And then, we setBackdrop to false only when renderCount is 1 (i.e. after )
//     // we have the width. As such, this would:
//     // should the menunavbar upon entering the first time (if less than 680)
//     // or, show the loading screen and backdrop if > 680 for the first time
//     renderCount === 1 && setBackDrop(false);
//   }, [renderCount]);

//   return (
//     <>
//       <div className={classes.container}>
//         {backdrop && (
//           <Backdrop isOpen={backdrop} onClose={() => {}}>
//             <Loader />
//           </Backdrop>
//         )}
//         {width && width > 680 ? (
//           <div className={classes.left}>
//             <Navbar rightDivRef={rightDivRef} setActive={setActive} />
//           </div>
//         ) : (
//           <div className={classes.top}>
//             <MenuNavbar isJustOpened={backdrop} active={active} />
//           </div>
//         )}

//         <div className={classes.right} ref={rightDivRef}>
//           {children}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
