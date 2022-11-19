import { Paper, PaperProps } from "@mui/material";
import styled from "styled-components";

interface StyledPaperProps extends PaperProps {
  bgColor?: string;
  width?: string;
  heigth?: string;
  imgWidth?: string;
}

export const StyledPaper = styled(Paper)<StyledPaperProps>((props) => ({
  backgroundColor: props.bgColor,
  width: props.width,
  height: props.heigth,

  "& image.MuiBox-root": {
    height: props.imgWidth,
  },

  "& img.MuiBox-root": {
    height: props.imgWidth,
  },
}));

/*const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "success",
})<StyledSliderProps>(({ success, theme }) => ({
  ...(success &&
    {
      // the overrides added when the new prop is used
    }),
}));*/
