import { useRef } from "react";
import { getArtists } from "../services/artists";
import { useArtists } from "../hooks/useArtists";

export function ArtistForm() {
  const { setArtists } = useArtists();
  const artistsRef = useRef(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const artistName = artistsRef.current.value.trim();
    if (!artistName) return;
    const token = JSON.parse(window.localStorage.getItem("token"));
    const data = await getArtists(artistName, token);
    setArtists(data.artists.items || []);
  };

  const handleReset = (event) => {
    event.preventDefault();
    artistsRef.current.value = "";
    setArtists([]);
  };

  return (
    <>
      <form className="flex flex-col gap-y-5 border border-white p-5 rounded-lg">
        <label htmlFor="artistName" className="text-lg">
          Search for an artist
        </label>
        <input
          ref={artistsRef}
          type="text"
          placeholder="Artist name"
          id="artistName"
        />
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
    </>
  );
}
