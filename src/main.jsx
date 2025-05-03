import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { BrowserRouter, Routes, Route } from "react-router";
import Artist from "./pages/Artist";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/artist/:id" element={<Artist />} />
    </Routes>
  </BrowserRouter>
);
