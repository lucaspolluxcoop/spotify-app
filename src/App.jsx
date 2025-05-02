import "./App.css";
import { ArtistList } from "./components/ArtistList";
import { useEffect } from "react";
import { ArtistForm } from "./components/ArtistForm";
import { getSpotifyToken } from "./utils/spotify";
import { ArtistProvider } from "./contexts/ArtistContext";

function App() {
  useEffect(() => {
    const prefetchData = async () => {
      await getSpotifyToken();
    };

    prefetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-xl font-semibold text-green-600 mb-10">
        Spotify App
      </h1>
      <ArtistProvider>
        <ArtistForm />
        <ArtistList />
      </ArtistProvider>
    </div>
  );
}

export default App;
