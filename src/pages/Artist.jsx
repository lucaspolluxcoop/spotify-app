import { ArtistCard } from "../components/ArtistCard";
import { ArtistAlbums } from "../components/ArtistAlbums";
import { ArtistTopTracks } from "../components/ArtistTopTracks";
import { useArtist } from "../hooks/useArtist";

console.log(123);
export default function Artist() {
  const { artist } = useArtist();
  return (
    <>
      {artist && (
        <div className="flex flex-col gap-y-10 max-w-md sm:max-w-full overflow-x-hidden">
          <ArtistCard artist={artist} />
          <ArtistAlbums artistAlbums={artist.albums.items} />
          <ArtistTopTracks artistTopTracks={artist.topTracks.tracks} />
        </div>
      )}
    </>
  );
}
