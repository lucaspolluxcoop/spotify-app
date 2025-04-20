import "./App.css";
import { ArtistList } from "./components/ArtistList";
import { useEffect } from "react";
import { ArtistForm } from "./components/ArtistForm";
import { getSpotifyToken } from "./utils/spotify";
import { useArtists } from "./hooks/useArtists";

function App() {
  const { setArtists, pagination, setPagination, paginatedArtists } =
    useArtists();

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
      <ArtistList
        artists={paginatedArtists}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
}

export default App;
