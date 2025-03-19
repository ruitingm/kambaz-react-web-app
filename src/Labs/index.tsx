import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kambaz from "../Kambaz";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs" className="ms-2">
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
          <Route path="Lab3/*" element={<Lab3 />}></Route>
          <Route path="Lab4" element={<Lab4 />}></Route>
          <Route path="Lab5/*" element={<Lab5 />}></Route>
          <Route path="Kambaz" element={<Kambaz />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}
