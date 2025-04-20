import { getToken } from "../services/spotify";

async function getSpotifyToken() {
  const now = new Date();
  const rawToken = window.localStorage.getItem("token");
  const parsedToken = rawToken ? JSON.parse(rawToken) : null;
  if (parsedToken && new Date(parsedToken.expiresAt) > now) return;
  try {
    const data = await getToken();
    data.expiresAt = new Date(now.getTime() + data.expires_in * 1000);
    window.localStorage.setItem("token", JSON.stringify(data));
  } catch (error) {
    console.error("Failed to get token:", error);
  }
}

export { getSpotifyToken };
