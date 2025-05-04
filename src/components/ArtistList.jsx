import { ArtistSearchCard } from "./ArtistSearchCard";
import { Pagination } from "./Pagination";
import { useSearchedArtists } from "../hooks/useSearchedArtists";

export function ArtistList() {
  const { pagination, setPagination, paginatedArtists } = useSearchedArtists();
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
            <ArtistSearchCard key={artist.id} artist={artist} />
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
