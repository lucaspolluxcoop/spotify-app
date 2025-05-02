import { createContext, useState } from "react";

export const LikedArtistsContext = createContext();

export function LikedArtistsProvider({ children }) {
  const [likedArtistsIds, setLikedArtistsIds] = useState([]);
  const addLikedArtist = (artist) => {
    localStorage.setItem(
      "likedArtistsIds",
      JSON.stringify([...likedArtistsIds, artist.id])
    );
    setLikedArtistsIds((prev) => [...prev, artist.id]);
  };
  const removeLikedArtist = (artist) => {
    localStorage.setItem(
      "likedArtistsIds",
      JSON.stringify(likedArtistsIds.filter((id) => id !== artist.id))
    );
    setLikedArtistsIds((prev) => prev.filter((id) => id !== artist.id));
  };
  const isLikedArtist = (artist) => {
    return likedArtistsIds.some((id) => id === artist.id);
  };
  return (
    <LikedArtistsContext.Provider
      value={{
        likedArtistsIds,
        setLikedArtistsIds,
        addLikedArtist,
        removeLikedArtist,
        isLikedArtist,
      }}
    >
      {children}
    </LikedArtistsContext.Provider>
  );
}
