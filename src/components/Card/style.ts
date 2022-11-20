import { Paper, PaperProps } from "@mui/material";
import styled from "styled-components";

interface StyledPaperProps extends PaperProps {
  bgColor?: string;
  width?: string;
  height?: string;
  p?: string;
}

export const StyledPaper = styled(Paper)<StyledPaperProps>((props) => ({
  backgroundColor: props.bgColor,
  width: props.width,
  height: props.height,
  padding: props.p || "8px",
  overflow: "hidden",
  marginTop: "20px",

  cursor: "pointer",
  background: "#e3f2fd",
  transition: "all .5s ease",

  ":hover": {
    backgroundColor: "#bbdefb",
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
