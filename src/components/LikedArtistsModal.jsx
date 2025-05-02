import { useLikedArtists } from "../hooks/useLikedArtists";
import { useState } from "react";

export function LikedArtistsModal() {
  const { likedArtistsIds } = useLikedArtists();
  const [showModal, setShowModal] = useState(false);
  const handleShowLikedArtists = () => {
    if (likedArtistsIds.length === 0) return;
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="absolute top-5 right-5 text-end">
        <span onClick={handleShowLikedArtists} className="cursor-pointer">
          Show liked artists
          <span className="text-sm ml-2">({likedArtistsIds.length})</span>
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
              {likedArtistsIds.map((artistId) => (
                <li key={artistId} className="flex items-center gap-2">
                  <span className="text-sm text-green-600">{artistId}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
