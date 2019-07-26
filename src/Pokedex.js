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

            <div>
                <h1>Poke DEX</h1>
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

                {/* 
                <Pokecard
                    id={pokemonList[0].id}
                    name={pokemonList[0].name}
                    type={pokemonList[0].type}
                    exp={pokemonList[0].exp}
                /> */}


            </div>
        );
    }
}
export default Pokedex;