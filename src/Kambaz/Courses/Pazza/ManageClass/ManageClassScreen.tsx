import { Navigate, Route, Routes } from "react-router";
import TOC from "./TOC";
import ManageFoldersScreen from "./ManageFoldersScreen.tsx";

export default function ManageClassScreen() {
  return (
    <div id="wd-pazza-mange-class-screen">
      <TOC />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="ManageFolders" />} />
          <Route path="ManageFolders" element={<ManageFoldersScreen />} />
        </Routes>
      </div>
    </div>
  );
}
