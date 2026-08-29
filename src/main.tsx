import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/ubuntu/latin-400.css";
import "@fontsource/ubuntu/latin-ext-400.css";
import "@fontsource/ubuntu/latin-500.css";
import "@fontsource/ubuntu/latin-ext-500.css";
import "@fontsource/ubuntu/latin-700.css";
import "@fontsource/ubuntu/latin-ext-700.css";
import "./styles/globals.css";
import { AppRouter } from "./app/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
