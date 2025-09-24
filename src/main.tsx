import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SelectTheme from "./Theme.tsx";
import DefaultMenu from "./menu.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <DefaultMenu />
      <App />
      <SelectTheme />
    </Router>
  </StrictMode>
);
