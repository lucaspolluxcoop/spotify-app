import { useContext, useEffect } from "react";
import { ArtistContext } from "../contexts/ArtistContext";

export function useSearchedArtists() {
  const {
    searchedArtists,
    setSearchedArtists,
    pagination,
    setPagination,
    paginatedArtists,
    setPaginatedArtists,
  } = useContext(ArtistContext);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: searchedArtists.length,
    }));
  }, [searchedArtists]);

  useEffect(() => {
    const start = (pagination.page - 1) * pagination.perPage;
    const end = start + pagination.perPage;
    setPaginatedArtists(searchedArtists.slice(start, end));
    window.scrollTo(0, 0);
  }, [pagination]);

  return { searchedArtists, setSearchedArtists, pagination, setPagination, paginatedArtists };
}
