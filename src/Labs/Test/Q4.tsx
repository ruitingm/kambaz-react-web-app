import { Link, Route, Routes } from "react-router-dom";
import Def4 from "./Def4";

export default function Q4() {
  return (
    <div>
      <h2>Q4</h2>
      <Link to="a/3/5">Def</Link>
      <Routes>
        <Route path="a/:v/:t" element={<Def4 />} />
      </Routes>
    </div>
  );
}
