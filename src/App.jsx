import "./App.css";
import { artist } from "./mocks/artist.json";
import { Artist } from "./components/Artist";
import { useState } from "react";

function App() {
  const [showArtist, setShowArtist] = useState(false);
  const handleSearch = (event) => {
    event.preventDefault();
    setShowArtist(true);
  };
  const handleReset = (event) => {
    event.preventDefault();
    setShowArtist(false);
  };
  return (
    <div className="container">
      <h1 className="text-xl font-semibold text-green-600 mb-10">
        Spotify App
      </h1>
      <form className="flex flex-col gap-y-5 border border-white p-5 rounded-lg">
        <label htmlFor="artistName" className="text-lg">
          Search for an artist
        </label>
        <input type="text" placeholder="Artist name" id="artistName" />
        <div className="flex gap-2">
          <button
            onClick={handleSearch}
            className="grow bg-green-600 text-black font-semibold rounded-lg"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="grow bg-green-600 text-black font-semibold rounded-lg"
          >
            Reset
          </button>
        </div>
      </form>
      {showArtist && <Artist artist={artist} />}
    </div>
  );
}

export default App;
