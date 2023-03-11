import React from "react";
import Typography from "@mui/material/Typography";

export const Header = ({ children }) => {
  return (
    <Typography style={{ margin: 50 }} align="center" variant="h3">
      {children}
    </Typography>
  );
};
