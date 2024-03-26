import React from "react";

// PokemonCards component displays Pokemon cards with images and names
// Props:
// - items: Array of objects containing Pokemon data (name, imageURL)
function PokemonCards({ items }) {
  return (
    <a
      href={`https://www.pokemon.com/us/pokedex/${items.name}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="rounded overflow-hidden shadow-lg my-5">
        {/* Image container */}
        <div className="flex justify-center">
          <img
            className="w-full h-[150px] object-contain"
            src={`https://img.pokemondb.net/artwork/large/${items.name}.jpg`}
            alt={items.name}
          />
        </div>
        {/* Pokemon name */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{items.name}</div>
        </div>
      </div>
    </a>
  );
}

export default PokemonCards;
