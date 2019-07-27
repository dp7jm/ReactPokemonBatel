import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
import Pokemonlist from './Pokemonlist';

const winner = (isWiner) => isWiner ? <h1>Winner!!</h1> : <h1>You lose</h1>
class Pokedex extends Component {
    static defaultProps = {
        pokemonlist: Pokemonlist
    }
    render() {
        const pokemonList = this.props.pokemonlist;
        return (

            <div className = 'Pokedex'>                
                <p>{`Wynik to: ${this.props.score}`}</p>
                {winner(this.props.winer)}
                
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