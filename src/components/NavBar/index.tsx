import { AppBar, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Thousands of animes to discover. Explore now!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
