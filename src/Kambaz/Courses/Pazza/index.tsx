import { Navigate, Route, Routes } from "react-router-dom";
import PazzaNavigation from "./PazzaNavigation";
import PazzaQandA from "./QandA/PazzaQandA";
import ManageClassScreen from "./ManageClass/ManageClassScreen";

export default function Pazza() {
  return (
    <div>
      <PazzaNavigation />
      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Navigate to="QandA" />} />
          <Route path="QandA/*" element={<PazzaQandA />} />
          <Route path="ManageClass/*" element={<ManageClassScreen />} />
        </Routes>
      </div>
    </div>
  );
}
