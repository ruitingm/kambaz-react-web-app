import { Link, Route, Routes } from "react-router-dom";
import Def14 from "./Def14";

export default function Q14() {
  return (
    <div>
      <h2>Q14</h2>
      <Link to="q/w">x</Link>
      <br />
      <Link to="q/s">r</Link>
      <Routes>
        <Route path="q/:a" element={<Def14 />} />
      </Routes>
    </div>
  );
}
