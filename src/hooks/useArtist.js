import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArtist, getArtistTopTracks, getArtistAlbums } from "../services/artists";

export function useArtist() {
  const [artist, setArtist] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtist = async () => {
      const data = await getArtist(id);
      setArtist(data);
    };
    const fetchArtistTopTracks = async () => {
      const data = await getArtistTopTracks(id);
      setArtistTopTracks(data);
    };
    const fetchArtistAlbums = async () => {
      const data = await getArtistAlbums(id);
      setArtistAlbums(data);
    };
    fetchArtist();
    fetchArtistTopTracks();
    fetchArtistAlbums();
  }, [id]);

  return { artist, artistTopTracks, artistAlbums };
}
