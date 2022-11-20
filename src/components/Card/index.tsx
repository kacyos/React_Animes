import { Box, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { StyledPaper } from "./style";

interface ICardProps {
  image: string;
  alt: string;
  text: string;
  sub: string;
}

export const Card = ({ image, alt, text, sub }: ICardProps) => {
  return (
    <StyledPaper width="200px" height="330px" elevation={18}>
      <Box
        display="flex"
        flexDirection="column"
        gap={0.2}
        component={"div"}
        height="100%"
      >
        <Box
          height="250px"
          component="img"
          src={image}
          alt={alt}
          sx={{ objectFit: "contain" }}
          borderRadius={1}
          loading="lazy"
        />
        <Divider color="#ddd" />
        <Stack height="100%" pt={1} px={2} gap={1} whiteSpace="nowrap">
          <Typography
            overflow="hidden"
            textOverflow="ellipsis"
            variant="body1"
            fontWeight="bold"
            textAlign="center"
            lineHeight={1.2}
          >
            {text}
          </Typography>
          <Typography variant="body2">{sub}</Typography>
        </Stack>
      </Box>
    </StyledPaper>
  );
};
