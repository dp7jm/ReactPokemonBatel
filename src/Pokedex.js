import React, {Component} from 'react';
class Pokedex extends Component {
    render() {
        return(
            <div>
                <Pokecard 
                id = {4}
                name = "Charmander" 
                type = "fire"
                expirence_point = {62}
                />


            </div>
        );
    }
}
export default Pokedex;