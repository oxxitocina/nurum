import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { BrowserRouter, Route, Routes } from "react-router";
import { GuestsPage } from "./common/guests-page/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <ModalsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/guestsNurum" element={<GuestsPage />} />
          </Routes>
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>
);
