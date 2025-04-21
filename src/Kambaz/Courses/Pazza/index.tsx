import { Navigate, Route, Routes } from "react-router-dom";
import PazzaNavigation from "./PazzaNavigation";
import PazzaQandA from "./QandA/QA";
import ManageClassScreen from "./ManageClass/ManageClassScreen";
import { useSelector } from "react-redux";

export default function Pazza() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-pazza">
      <div id="wd-pazza-navigation-bar">
        <PazzaNavigation />
      </div>
      <div id="wd-pazza-main-content">
        <Routes>
          <Route path="/" element={<Navigate to="QandA" />} />
          <Route path="QandA/*" element={<PazzaQandA />} />
          {currentUser.role === "FACULTY" && (
            <Route path="ManageClass/*" element={<ManageClassScreen />} />
          )}
        </Routes>
      </div>
    </div>
  );
}
