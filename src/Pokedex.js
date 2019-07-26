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
                <h1>Poke DEX</h1>
                {console.log(Pokemonlist)}
                {console.log(this.props.pokemonlist)}
                {console.log(this.props.pokemonlist[0].id)}

                <Pokecard 
                id = {this.props.pokemonlist[0].id}
                name = {this.props.pokemonlist[0].name} 
                type = "fire"
                exp = {62}
                />


            </div>
        );
    }
}
export default Pokedex;