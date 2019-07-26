import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
import Pokemonlist from './Pokemonlist';

class Pokedex extends Component {
    static defaultProps = {
        pokemonlist: Pokemonlist 
    }
    render() {
        // const pokemonList = this.props.pokemonlist;
        return(
            
            <div>
                <Pokecard 
                id = {2}
                name = "Charmander" 
                type = "fire"
                exp = {62}
                />


            </div>
        );
    }
}
export default Pokedex;