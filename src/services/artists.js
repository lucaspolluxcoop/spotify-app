const token = JSON.parse(window.localStorage.getItem("token"));
const opt = {
  headers: {
    Authorization: `${token.token_type} ${token.access_token}`,
  },
};
const artistUrl = "https://api.spotify.com/v1/artists";

async function getArtist(artistId) {
  const artistResponse = await fetch(`${artistUrl}/${artistId}`, opt);
  const artist = await artistResponse.json();

  const topTracksResponse = await fetch(
    `${artistUrl}/${artistId}/top-tracks`,
    opt
  );
  const topTracks = await topTracksResponse.json();
  artist.topTracks = topTracks;

  const albumsResponse = await fetch(`${artistUrl}/${artistId}/albums`, opt);
  const albums = await albumsResponse.json();
  artist.albums = albums;
  return artist;
}

export { getArtist };
