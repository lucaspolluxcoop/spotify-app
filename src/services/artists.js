const token = JSON.parse(window.localStorage.getItem("token"));
const opt = {
  headers: {
    Authorization: `${token.token_type} ${token.access_token}`,
  },
};
const artistUrl = "https://api.spotify.com/v1/artists";

async function getArtists(artistName) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      artistName
    )}&type=artist`,
    opt
  );
  return await response.json();
}

async function getArtist(artistId) {
  const response = await fetch(`${artistUrl}/${artistId}`, opt);
  return await response.json();
}

async function getArtistTopTracks(artistId) {
  const response = await fetch(`${artistUrl}/${artistId}/top-tracks`, opt);
  return await response.json();
}

async function getArtistAlbums(artistId) {
  const response = await fetch(`${artistUrl}/${artistId}/albums`, opt);
  return await response.json();
}

export { getArtists, getArtist, getArtistTopTracks, getArtistAlbums };
