import { ArtistCard } from "./ArtistCard";
import { Pagination } from "./Pagination";
import { useArtists } from "../hooks/useArtists";

export function ArtistList() {
  const { pagination, setPagination, paginatedArtists } = useArtists();
  return (
    <>
      {paginatedArtists.length > 0 && (
        <>
          <Pagination
            pagination={pagination}
            setPagination={setPagination}
            elements={paginatedArtists}
            className="sm:hidden"
          />
          {paginatedArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
          <Pagination
            pagination={pagination}
            setPagination={setPagination}
            elements={paginatedArtists}
          />
        </>
      )}
    </>
  );
}
