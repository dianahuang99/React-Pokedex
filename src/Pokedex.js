import React from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.list.map((pokemon) => (
          <Pokecard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
