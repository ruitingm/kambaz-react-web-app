import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
