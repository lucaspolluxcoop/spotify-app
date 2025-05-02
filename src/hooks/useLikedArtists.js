import { useContext, useEffect } from "react";
import { LikedArtistsContext } from "../contexts/LikedArtistsContext";

export function useLikedArtists() {
  const {
    likedArtistsIds,
    setLikedArtistsIds,
    addLikedArtist,
    removeLikedArtist,
    isLikedArtist,
  } = useContext(LikedArtistsContext);

  useEffect(() => {
    const likedArtistsIds = localStorage.getItem("likedArtistsIds");

    if (likedArtistsIds) {
      const artistsIds = JSON.parse(likedArtistsIds);
      setLikedArtistsIds(artistsIds);
    }
  }, []);

  return {
    likedArtistsIds,
    setLikedArtistsIds,
    addLikedArtist,
    removeLikedArtist,
    isLikedArtist,
  };
}
