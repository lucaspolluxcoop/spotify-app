import "./App.css";
import { ArtistCard } from "./components/ArtistCard";
import { useState, useEffect } from "react";
import { ArtistForm } from "./components/ArtistForm";
import { getSpotifyToken } from "./utils/spotify";

function App() {
  const [artists, setArtists] = useState([]);

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
      <ArtistForm setArtists={setArtists} />
      {artists.length > 0 &&
        artists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}
    </div>
  );
}

export default App;
