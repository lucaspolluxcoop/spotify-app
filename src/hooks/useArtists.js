import { useContext, useEffect } from "react";
import { ArtistContext } from "../contexts/ArtistContext";

export function useArtists() {
  const {
    artists,
    setArtists,
    pagination,
    setPagination,
    paginatedArtists,
    setPaginatedArtists,
  } = useContext(ArtistContext);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: artists.length,
    }));
  }, [artists]);

  useEffect(() => {
    const start = (pagination.page - 1) * pagination.perPage;
    const end = start + pagination.perPage;
    setPaginatedArtists(artists.slice(start, end));
  }, [pagination]);

  return { artists, setArtists, pagination, setPagination, paginatedArtists };
}
