import { ArtistCard } from "./ArtistCard";
import { Pagination } from "./Pagination";

export function ArtistList({ artists, pagination, setPagination }) {
  return (
    <>
      {artists.length > 0 && (
        <>
          <Pagination
            pagination={pagination}
            setPagination={setPagination}
            elements={artists}
            className="sm:hidden"
          />
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
          <Pagination
            pagination={pagination}
            setPagination={setPagination}
            elements={artists}
          />
        </>
      )}
    </>
  );
}
