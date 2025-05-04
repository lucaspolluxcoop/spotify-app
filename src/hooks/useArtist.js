import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArtist } from "../services/artists";

export function useArtist() {
  const [artist, setArtist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtist = async () => {
      const data = await getArtist(id);
      console.log(data);
      setArtist(data);
    };
    fetchArtist();
  }, [id]);

  return { artist };
}
