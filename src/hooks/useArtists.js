import { useEffect, useState } from "react";

export function useArtists() {
  const [artists, setArtists] = useState([]);
  const [paginatedArtists, setPaginatedArtists] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    total: 0,
    prevPage: 1,
    nextPage: 1,
  });

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
