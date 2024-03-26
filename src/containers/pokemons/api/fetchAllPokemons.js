// Define a function to fetch data
export const fetchAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
