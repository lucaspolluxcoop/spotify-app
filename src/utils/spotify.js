import { getToken } from "../services/spotify";

async function getSpotifyToken() {
  const token = window.localStorage.getItem("token");
  if (token) return;
  try {
    const data = await getToken();
    window.localStorage.setItem("token", JSON.stringify(data));
  } catch (error) {
    console.error("Failed to get token:", error);
  }
}

export { getSpotifyToken };
