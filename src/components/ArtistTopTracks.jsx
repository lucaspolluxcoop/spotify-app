import { StarIcon } from "../components/Icons";

export function ArtistTopTracks({ artistTopTracks }) {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <h2 className="text-2xl font-semibold text-green-600 mb-3 text-center">
        Top Tracks
      </h2>
      <div className="overflow-x-auto max-w-full">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-12 gap-x-3 mb-2 w-full">
            <div className="col-span-1 text-left">Image</div>
            <div className="col-span-4 text-left">Name</div>
            <div className="col-span-4 text-left">Album</div>
            <div className="col-span-1 text-left">Pop.</div>
            <div className="col-span-2 text-left">Duration</div>
          </div>
          {artistTopTracks.slice(0, 10).map((track) => (
            <div
              key={track.id}
              className="grid grid-cols-12 gap-x-3 mb-2 w-full"
            >
              <div className="col-span-1 text-left">
                <img
                  src={
                    track.album.images.find((image) => image.width === 64)?.url
                  }
                  alt={track.name}
                  className="object-cover rounded"
                />
              </div>
              <div className="col-span-4 text-left flex items-center gap-x-1">
                <a
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  {track.name}
                </a>
              </div>
              <div className="col-span-4 text-left flex items-center gap-x-1">
                <a
                  href={track.album.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  {track.album.name}
                </a>
              </div>
              <div className="col-span-1 text-left flex items-center gap-x-1">
                {(track.popularity / 20).toFixed(1)}
                <StarIcon className="size-2" />
              </div>
              <div className="col-span-2 text-left flex items-center gap-x-1">
                {(track.duration_ms / 1000 / 60).toFixed(2)} m
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
