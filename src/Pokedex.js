import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
import Pokemonlist from './Pokemonlist';

class Pokedex extends Component {
    static defaultProps = {
        pokemonlist: Pokemonlist
    }
    render() {
        const pokemonList = this.props.pokemonlist;
        return (

            <div className = 'Pokedex'>
                <h1 className = 'Pokedex-h1'>Poke DEX</h1>
                <h1>{`Wynik to: ${this.props.score}`}</h1>
                
              <div className = 'Pokedex-cardfield'>
                {
                    pokemonList.map((p,prop) => (
                        <Pokecard
                            key={prop}                        
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.exp}
                        />
                    ))

                }
                </div>  



            </div>
        );
    }
}
export default Pokedex;