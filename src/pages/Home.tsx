import { useEffect, useState } from "react";
import { getAll } from "../service/requests";
import {
  AppBar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Toolbar,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

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
    console.log(data);
  };

  useEffect(() => {
    getAllAnimes();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
        </Toolbar>
      </AppBar>

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
            <Paper
              elevation={8}
              sx={{ width: "220px", height: "340px", padding: "8px 8px" }}
            >
              <Box
                display="flex"
                justifyContent="center"
                mx="auto"
                height="80%"
              >
                <Box
                  component="img"
                  src={anime.image}
                  alt={anime.title}
                  sx={{ objectFit: "fill" }}
                  borderRadius={1}
                  loading="lazy"
                />
              </Box>
              <Box
                height="20%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography textAlign="center" variant="subtitle1">
                  {anime.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
