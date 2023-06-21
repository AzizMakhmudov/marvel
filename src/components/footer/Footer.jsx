import { Box, Button, useTheme } from "@mui/material";
import React from "react";

export default function Footer() {
  const theme = useTheme();
  return (
    <footer className="layout__footer">
      <Box
        paddingTop={2}
        paddingBottom={2}
        textAlign={"center"}
        bgcolor={theme.palette.primary.dark}
        color={"white"}
      >
        <Button href="https://marvel.com" style={{ color: "white" }}>
          Data provided by Marvel. © 2023 MARVEL
        </Button>
      </Box>
    </footer>
  );
}
