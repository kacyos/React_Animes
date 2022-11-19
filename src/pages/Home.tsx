import { useEffect, useState } from "react";
import { getAll } from "../service/requests";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const Home = () => {
  const [animes, setAnimes] = useState([]);
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

      <Container maxWidth="xl" sx={{ background: "red" }}>
        dsda
      </Container>
    </>
  );
};
