import { artist } from "../mocks/artist.json";
import { artistAlbums } from "../mocks/artist-albums.json";
import { artistTopTracks } from "../mocks/artist-top-tracks.json";
import { ArtistCard } from "../components/ArtistCard";
import { ArtistAlbums } from "../components/ArtistAlbums";
import { ArtistTopTracks } from "../components/ArtistTopTracks";

export default function Artist() {
  return (
    <div className="flex flex-col gap-y-10 max-w-md sm:max-w-full overflow-x-hidden">
      <ArtistCard artist={artist} />
      <ArtistAlbums artistAlbums={artistAlbums} />
      <ArtistTopTracks artistTopTracks={artistTopTracks} />
    </div>
  );
}
