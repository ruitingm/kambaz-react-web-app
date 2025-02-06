import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kambaz from "../Kambaz";

export default function Labs() {
  return (
    <div id="wd-labs">
      <br />
      <h1>Labs</h1>
      <h4>Name: Ruiting Ma </h4>
      <h4>Section: 01</h4>
      <br />
      <TOC />
      <br />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />}></Route>
        <Route path="Lab1" element={<Lab1 />}></Route>
        <Route path="Lab2" element={<Lab2 />}></Route>
        <Route path="Lab3" element={<Lab3 />}></Route>
        <Route path="Kambaz" element={<Kambaz />}></Route>
      </Routes>
    </div>
  );
}
