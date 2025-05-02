import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LikedArtistsProvider } from "./contexts/LikedArtistsContext";

createRoot(document.getElementById("root")).render(
  <LikedArtistsProvider>
    <App />
  </LikedArtistsProvider>
);
