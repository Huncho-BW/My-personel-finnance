import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./budget.css";
import "./pot.css";
import "./recurring.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
