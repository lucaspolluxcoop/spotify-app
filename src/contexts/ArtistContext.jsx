import { createContext, useState } from "react";

export const ArtistContext = createContext();

export function ArtistProvider({ children }) {
  const [searchedArtists, setSearchedArtists] = useState([]);
  const [paginatedArtists, setPaginatedArtists] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    total: 0,
    prevPage: 1,
    nextPage: 1,
  });
  return (
    <ArtistContext.Provider
      value={{
        searchedArtists,
        setSearchedArtists,
        pagination,
        setPagination,
        paginatedArtists,
        setPaginatedArtists,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}
