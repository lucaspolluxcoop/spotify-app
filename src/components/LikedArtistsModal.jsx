import { useLikedArtists } from "../hooks/useLikedArtists";
import { useState } from "react";

export function LikedArtistsModal() {
  const { likedArtists, removeLikedArtist } = useLikedArtists();
  const [showModal, setShowModal] = useState(false);

  function handleShowLikedArtists() {
    if (likedArtists.length === 0) return;
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="absolute top-5 right-5 text-end">
        <span onClick={handleShowLikedArtists} className="cursor-pointer">
          Show liked artists
          <span className="text-sm ml-2">({likedArtists.length})</span>
        </span>
      </div>
      {showModal && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-white p-4 overflow-y-auto">
          <div className="flex justify-end mb-3">
            <span
              onClick={handleCloseModal}
              className="cursor-pointer text-black font-semibold rounded-lg py-1 px-3 text-right"
            >
              X
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-semibold mb-4 text-green-600">
              Liked Artists
            </h2>
            <ul className="space-y-2">
              {likedArtists.map((artist) => (
                <li
                  key={artist.id}
                  className="flex items-center justify-between gap-2"
                >
                  <a
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 font-semibold"
                  >
                    {artist.name}
                  </a>
                  <span
                    onClick={() => {
                      removeLikedArtist(artist);
                    }}
                    className="bg-green-600 text-black font-semibold rounded-lg py-1 px-3 cursor-pointer text-sm"
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
