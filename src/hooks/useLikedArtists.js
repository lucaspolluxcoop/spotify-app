import { useContext } from "react";
import { LikedArtistsContext } from "../contexts/LikedArtistsContext";

export function useLikedArtists() {
  const { likedArtists, setLikedArtists } = useContext(LikedArtistsContext);

  // Agrega el artista completo si no existe ya
  function addLikedArtist(artist) {
    if (!likedArtists.some((a) => a.id === artist.id)) {
      setLikedArtists([...likedArtists, artist]);
    }
  }

  // Elimina el artista por id
  function removeLikedArtist(artist) {
    setLikedArtists(likedArtists.filter((a) => a.id !== artist.id));
  }

  // Verifica si el artista está en la lista
  function isLikedArtist(artist) {
    return likedArtists.some((a) => a.id === artist.id);
  }

  return {
    likedArtists,
    addLikedArtist,
    removeLikedArtist,
    isLikedArtist,
  };
}
