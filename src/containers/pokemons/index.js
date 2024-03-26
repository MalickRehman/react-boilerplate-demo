import React from "react";
import usePokemon from "./api";
import PokemonComponent from "../../components/PokemonComponent";

// PokemonsContainer component fetches Pokemon data and renders PokemonComponent
function PokemonsContainer() {
  // Fetch Pokemon data using custom hook
  const { isLoading, pokemonData, isError } = usePokemon();

  // Render based on the data fetching status

  // Show loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show error message if an error occurred during data fetching
  if (isError) {
    return <div>An error has occurred: </div>;
  }

  // Render PokemonComponent with fetched data
  return <PokemonComponent data={pokemonData} />;
}

export default PokemonsContainer;
