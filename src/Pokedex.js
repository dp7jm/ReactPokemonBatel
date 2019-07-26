import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        return(
            <div>
                <Pokecard 
                id = {4}
                name = "Charmander" 
                type = "fire"
                exp = {62}
                />


            </div>
        );
    }
}
export default Pokedex;