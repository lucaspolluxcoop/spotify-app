import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

const Artist = lazy(() => import("./pages/Artist"));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/artist/:id" element={<Artist />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
