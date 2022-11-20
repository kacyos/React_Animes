import {
  AppBar,
  Box,
  Chip,
  Input,
  ListItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar color="secondary" position="static" sx={{ height: "220px" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="70%"
      >
        <Typography textAlign="center" variant="h4" component="div">
          Thousands of animes to discover.
        </Typography>
        <Typography textAlign="center" variant="h4" component="div">
          Explore now!
        </Typography>
      </Box>
      <ListItem>
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
        <Chip label="Teste" onDelete={() => {}} />
      </ListItem>
      <Box>
        <TextField
          label="Standard warning"
          variant="filled"
          color="info"
          focused
        />
      </Box>
    </AppBar>
  );
};
