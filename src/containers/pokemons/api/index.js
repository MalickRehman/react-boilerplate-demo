import { useQuery } from "react-query";
import { fetchAllPokemons } from "./fetchAllPokemons";
import { get } from "../../../utils/loadsh";
export default function usePokemon() {
  // Use useQuery hook to fetch data
  const { isLoading, data, isError } = useQuery("pokemons", fetchAllPokemons);
  const pokemonData = get(data, "results");
  return {
    isLoading,
    pokemonData,
    isError,
  };
}
