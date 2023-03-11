import React from "react";
import Grid from "@mui/material/Grid";
import CardMui from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import { cardData } from "./CardData";

export const Card = () => {
  return (
    <Grid container direction="row" gap={7} alignItems="center">
      {cardData.map((card) => {
        return (
          <Grid container justifyContent="center" item>
            <CardMui elevation={3} style={{ width: 600, padding: 20 }}>
              <Typography align="center">{card.label}</Typography>
              <Avatar
                variant="rounded"
                sx={{ margin: "auto", width: 450, height: 250 }}
                src={card.image}
              />
              <Typography align="center">{card.description}</Typography>
              <Link href={card.github}>
                <Typography align="center">GitHub</Typography>
              </Link>
            </CardMui>
          </Grid>
        );
      })}
    </Grid>
  );
};
