import { Box, Typography } from "@mui/material";
import { StyledPaper } from "./style";

interface ICardProps {
  image: string;
  alt: string;
  text: string;
}

export const Card = ({ image, alt, text }: ICardProps) => {
  return (
    <StyledPaper bgColor="red" width="230px" elevation={8}>
      <Box component={"image"}>
        <Box
          component="img"
          src={image}
          alt={alt}
          sx={{ objectFit: "contain" }}
          borderRadius={1}
          loading="lazy"
        />
      </Box>
      <Typography variant="subtitle1">{text}</Typography>
    </StyledPaper>
  );
};
