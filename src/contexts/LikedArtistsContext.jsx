import { createContext, useState, useEffect } from "react";

export const LikedArtistsContext = createContext();

export function LikedArtistsProvider({ children }) {
  // Inicializa desde localStorage si existe, si no, array vacío
  const [likedArtists, setLikedArtists] = useState(() => {
    const stored = localStorage.getItem("likedArtists");
    return stored ? JSON.parse(stored) : [];
  });

  // Sincroniza con localStorage cada vez que likedArtists cambia
  useEffect(() => {
    localStorage.setItem("likedArtists", JSON.stringify(likedArtists));
  }, [likedArtists]);

  return (
    <LikedArtistsContext.Provider value={{ likedArtists, setLikedArtists }}>
      {children}
    </LikedArtistsContext.Provider>
  );
}
