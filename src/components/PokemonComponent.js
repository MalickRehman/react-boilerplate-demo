import React from "react";
import { map } from "../utils/loadsh"; // Assuming loadsh is a typo and you meant lodash
import AppLayout from "../layouts";
import PokemonCards from "./cards/PokemonCards";

// PokemonComponent displays a grid of Pokemon cards
// Props:
// - data: Array of objects containing Pokemon data
function PokemonComponent({ data }) {
  return (
    <>
      {/* Grid layout for Pokemon cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Map over the data array to render each Pokemon card */}
        {map(data, (items, i) => (
          <div key={i} className="cursor-pointer">
            {/* Render Pokemon card component */}
            <PokemonCards items={items} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PokemonComponent;
