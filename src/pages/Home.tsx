import { useEffect, useState } from "react";
import { getAll } from "../service/requests";
import { Grid } from "@mui/material";
import { Card } from "../components/Card";

type AnimeProps = {
  _id: string;
  title: string;
  ranking: number;
  genres: Array<string>;
  episodes: number;
  hasEpisode: boolean;
  hasRanking: boolean;
  image: string;
  link: string;
  status: string;
  synopsis: string;
  thumb: string;
  type: string;
};

export const Home = () => {
  const [animes, setAnimes] = useState<AnimeProps[]>([]);
  const [meta, setMeta] = useState("1");

  const getAllAnimes = async () => {
    const { data, meta } = await getAll({ path: "anime" });
    setMeta(meta);
    setAnimes(data);
  };

  useEffect(() => {
    getAllAnimes();
  }, []);

  return (
    <>
      <Grid
        container
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={4}
        mb={4}
      >
        {animes.map((anime) => (
          <Grid item sx={{ cursor: "pointer", zoom: "2px" }}>
            <Card image={anime.image} alt={anime.title} text={anime.title} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
