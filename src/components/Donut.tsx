import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import classes from "./Donuts.module.css";

const Donut = () => {
  const percentage = 200;

  return (
    <div className={classes.holder}>
      <CircularProgressbarWithChildren
        maxValue={975}
        value={percentage}
        strokeWidth={4}
        background={true}
        styles={{
          path: {
            stroke: `rgb(129,23,170)`,

            strokeLinecap: "round",
          },

          trail: {
            stroke: "rgb(230,212,238)",

            strokeLinecap: "round",
          },
          background:{
              fill:'rgb(254,254,254)',
          },
        }}
      >
        <div className={classes.container}>
          <p className={classes.line1}> 382</p>
          <p className={classes.line2}>Sold</p>
          <p className={classes.line3}>
            {" "}
            Out Of <br />
            985
          </p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
export default Donut;
