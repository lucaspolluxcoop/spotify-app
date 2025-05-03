import { useState } from "react";
import { LikeIcon, UnlikeIcon } from "./Icons";
import { useLikedArtists } from "../hooks/useLikedArtists";

export function ArtistSearchCard({ artist }) {
  const { addLikedArtist, removeLikedArtist, isLikedArtist } =
    useLikedArtists();
  const [isHovering, setIsHovering] = useState(false);
  const liked = isLikedArtist(artist);
  return (
    <div className="artist-profile my-8">
      <h2 className="text-2xl font-bold text-green-600 flex gap-x-3 items-center">
        <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
          {artist.name}
        </a>
        <small className="flex items-center">
          <span
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => {
              if (liked) {
                removeLikedArtist(artist);
              } else {
                addLikedArtist(artist);
              }
            }}
            className="font-semibold rounded-lg py-1 px-3 cursor-pointer text-sm transition-colors"
          >
            {liked && isHovering ? (
              <UnlikeIcon />
            ) : (
              <LikeIcon isLiked={liked} />
            )}
          </span>
        </small>
      </h2>
      <small className="ml-2">({artist.followers.total} followers)</small>
      {artist.description && (
        <p className="text-lg mt-2">{artist.description}</p>
      )}
      <div className="mt-2 grid grid-cols-2 gap-y-2 gap-x-2 sm:flex sm:flex-row sm:gap-2 ">
        {artist.genres &&
          artist.genres.length > 0 &&
          artist.genres.slice(0, 4).map((genre) => (
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
