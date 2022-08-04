import logo from "./logo.svg";
import "./App.css";
import Pokedex from "./Pokedex";
import pokemonlist from "./pokemonlist";

function App() {
  return (
    <div className="App">
      <Pokedex list={pokemonlist} />
    </div>
  );
}

export default App;
