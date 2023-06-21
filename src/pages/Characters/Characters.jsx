import React from "react";
import { Alert, Grid, LinearProgress } from "@mui/material";
import { useCharacters } from "./queries";
import CharacterCard from "../../components/card/CharacterCard";

export default function Characters() {
  const { data, isLoading, error } = useCharacters({
    limit: 10,
    offset: 0,
  });

  if (isLoading) return <LinearProgress />;

  if (error) return <Alert severity="error">{error.toString()}</Alert>;

  return (
    <Grid paddingY={3} paddingX={2} container spacing={2}>
      {data.data.data?.results?.map((character) => (
        <Grid key={character.id} item xs={12} md={3}>
          <CharacterCard
            title={character.name}
            id={character.id}
            img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
