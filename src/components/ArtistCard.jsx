import { StarIcon } from "../components/Icons";

export function ArtistCard({ artist }) {
  return (
    <div className="flex flex-col gap-y-2 w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center items-end gap-x-3">
        <div className="text-4xl font-bold text-green-600">{artist.name}</div>
        <div className="text-md">({artist.followers.total} seguidores)</div>
      </div>
      <div className="flex justify-center items-center">
        <img src={artist.images[0].url} alt="Artist" />
      </div>
      <div className="flex justify-center items-top gap-x-3 mt-3">
        <div className="flex flex-col gap-y-2 min-w-1/3">
          <span className="text-lg">Popularity</span>
          <div className="flex gap-x-1 justify-center items-center">
            {Array.from({ length: Math.floor(artist.popularity / 20) }).map(
              (_, index) => (
                <StarIcon key={index} className="size-4" />
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-2 max-w-2/3">
          <span className="text-lg">Genres</span>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {artist.genres.map((genre) => (
              <span
                className="bg-green-600 text-black text-md font-semibold rounded-lg px-2"
                key={genre}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
