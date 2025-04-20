async function getArtists(artistName, token) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      artistName
    )}&type=artist`,
    {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    }
  );
  return await response.json();
}

export { getArtists };
