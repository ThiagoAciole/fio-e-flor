import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/ubuntu/latin-400.css";
import "@fontsource/ubuntu/latin-ext-400.css";
import "@fontsource/ubuntu/latin-500.css";
import "@fontsource/ubuntu/latin-ext-500.css";
import "@fontsource/ubuntu/latin-700.css";
import "@fontsource/ubuntu/latin-ext-700.css";
import "./styles/globals.css";
import App from "./app/App.tsx";
import AboutPage from "./app/AboutPage.tsx";
import { AppProviders } from "./app/providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      {window.location.pathname === "/sobre" ? <AboutPage /> : <App />}
    </AppProviders>
  </StrictMode>,
);
