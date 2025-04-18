import { Navigate, Route, Routes } from "react-router-dom";
import PazzaNavigation from "./PazzaNavigation";
import PazzaQandA from "./QandA/QA";
import ManageClassScreen from "./ManageClass/ManageClassScreen";

export default function Pazza() {
  return (
    <div id="wd-pazza">
      <div id="wd-pazza-navigation-bar">
        <PazzaNavigation />
      </div>
      <div id="wd-pazza-main-content">
        <Routes>
          <Route path="/" element={<Navigate to="QandA" />} />
          <Route path="QandA/*" element={<PazzaQandA />} />
          <Route path="ManageClass/*" element={<ManageClassScreen />} />
        </Routes>
      </div>
    </div>
  );
}
