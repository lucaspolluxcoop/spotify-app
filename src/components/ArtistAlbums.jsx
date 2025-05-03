export function ArtistAlbums({ artistAlbums }) {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-2xl font-semibold text-green-600 mb-3">Albums</h2>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-3 md:grid-cols-4 md:gap-x-5">
        {artistAlbums.items.slice(0, 4).map((album) => (
          <div
            key={album.id}
            className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-x-5"
          >
            <a
              href={album.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              <img src={album.images[0].url} alt={album.name} />
            </a>
            <div className="flex flex-col gap-y-1 justify-center">
              <div className="text-lg font-semibold">{album.name}</div>
              <span className="text-sm">{album.release_date}</span>
              <span className="text-sm">{album.total_tracks} tracks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
