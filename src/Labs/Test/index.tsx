import Q1 from "./q1";
import Q10 from "./Q10";
import Q11 from "./Q11";
import Q12 from "./Q12";
import Q13 from "./Q13";
import Q14 from "./Q14";
import Q15 from "./Q15";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";
import Q8 from "./Q8";
import Q9 from "./Q9";

export default function Test() {
  return (
    <div>
      <Q1 />
      <hr />
      <Q2 />
      <hr />
      <Q3 />
      <hr />
      <Q4 />
      <hr />
      <Q5 />
      <hr />
      <Q6 d={{ b: "a" }} />
      <hr />
      <Q7 />
      <hr />
      <Q8 />
      <hr />
      <Q9 />
      <hr />
      <Q10 />
      <hr />
      <Q11 d={["a"]} />
      <hr />
      <Q12 />
      <hr />
      <Q13 />
      <hr />
      <Q14 />
      <hr />
      <Q15 />
    </div>
  );
}
