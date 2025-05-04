const token = JSON.parse(window.localStorage.getItem("token"));
const opt = {
  headers: {
    Authorization: `${token.token_type} ${token.access_token}`,
  },
};

async function getSearchedArtists(artistName) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      artistName
    )}&type=artist`,
    opt
  );
  return await response.json();
}

export { getSearchedArtists };
