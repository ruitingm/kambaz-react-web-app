import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kambaz from "../Kambaz";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h3>Name: Ruiting Ma</h3>
      <h3>Section: 01 Tuesdays 3-6pm</h3>
      <TOC />
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
