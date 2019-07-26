import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import Pokemonlist from './Pokemonlist';

function App() {
  return (
    <div className="App">
      <Pokedex
      pokemonList = {Pokemonlist}
      />
    </div>
  );
}

export default App;
