import { useRef } from "react";
import { getSearchedArtists } from "../services/searched-artists";
import { useSearchedArtists } from "../hooks/useSearchedArtists";

export function ArtistForm() {
  const { setSearchedArtists } = useSearchedArtists();
  const artistsRef = useRef(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const artistName = artistsRef.current.value.trim();
    if (!artistName) return;
    const data = await getSearchedArtists(artistName);
    setSearchedArtists(data.artists.items || []);
  };

  const handleReset = (event) => {
    event.preventDefault();
    artistsRef.current.value = "";
    setSearchedArtists([]);
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
