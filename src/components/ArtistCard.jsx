export function ArtistCard({ artist }) {
  return (
    <div className="artist-profile my-3">
      <h2 className="text-2xl font-semibold text-green-600 mt-4">
        <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
          {artist.name}
        </a>
        <small className="ml-2">({artist.followers.total} followers)</small>
      </h2>
      {artist.description && (
        <p className="text-lg mt-2">{artist.description}</p>
      )}
      <div className="mt-2 grid grid-cols-2 gap-y-2 gap-x-2 sm:flex sm:flex-row sm:gap-2 ">
        {artist.genres &&
          artist.genres.length > 0 &&
          artist.genres.map((genre) => (
            <span
              className="text-sm bg-green-600 text-black font-semibold rounded-lg py-1 px-2"
              key={genre}
            >
              {genre}
            </span>
          ))}
      </div>
      <div className="flex justify-center items-center">
        {artist.images && artist.images.length > 0 && (
          <img
            key={artist.images[0].url}
            src={artist.images[0].url}
            alt="Artist"
            className="w-48 h-48 rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
