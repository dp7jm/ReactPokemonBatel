import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
import Pokemonlist from './Pokemonlist';

class Pokedex extends Component {
    static defaultProps = {
        pokemonlist: Pokemonlist 
    }
    render() {
        const pokemonList = this.props.pokemonlist;
        return(
            
            <div>
                <h1>Poke DEX</h1>
                {console.log(Pokemonlist)}
                {console.log(this.props.pokemonlist)}
                {console.log(this.props.pokemonlist[0].id)}

                <Pokecard 
                id = {pokemonList[0].id}
                name = {pokemonList[0].name} 
                type = {pokemonList[0].type} 
                exp = {pokemonList[0].exp} 
                />


            </div>
        );
    }
}
export default Pokedex;