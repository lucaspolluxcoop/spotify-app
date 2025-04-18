export function Artist({ artist }) {
  return (
    <div className="artist-profile mt-10">
      <h2 className="text-2xl font-semibold text-green-600 mt-4">
        <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
          {artist.name}
        </a>
        <small className="ml-2">({artist.followers.total} followers)</small>
      </h2>
      {artist.description && (
        <p className="text-lg mt-2">{artist.description}</p>
      )}
      <div className="artist-genres mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2">
        {artist.genres &&
          artist.genres.length > 0 &&
          artist.genres.map((genre) => (
            <span
              className="text-sm bg-green-600 text-black font-semibold rounded-lg p-1"
              key={genre}
            >
              {genre}
            </span>
          ))}
      </div>
      <div className="artist-images">
        {artist.images.map((image) => (
          <img
            key={image.url}
            src={image.url}
            alt="Artist"
            className="w-48 h-48 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
