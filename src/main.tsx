import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.scss";

import App from "./App.tsx";
import { GeneratorProvider } from "./context/GeneratorContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GeneratorProvider>
        <App />
      </GeneratorProvider>
    </BrowserRouter>
  </StrictMode>
);