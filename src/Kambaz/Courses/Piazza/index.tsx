import { Navigate, Route, Routes } from "react-router-dom";
import FolderFilter from "./FolderFilter";
import PazzaNavigation from "./PazzaNavigation";
import PazzaQandA from "./QandA";

export default function Pazza() {
  return (
    <div>
      <PazzaNavigation />
      <FolderFilter />
      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Navigate to="QandA" />} />
          <Route path="QandA" element={<PazzaQandA />} />
        </Routes>
      </div>
    </div>
  );
}
