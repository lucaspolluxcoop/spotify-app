async function getSpotifyToken() {
  const token = window.localStorage.getItem("token");
  if (token) return;
  try {
    const response = fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${
        import.meta.env.VITE_SPOTIFY_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`,
    });

    const data = await response.json();
    window.localStorage.setItem("token", JSON.stringify(data));
  } catch (error) {
    console.error("Failed to get token:", error);
  }
}

export { getSpottifyToken };
