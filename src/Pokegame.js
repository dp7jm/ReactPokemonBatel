import React, { Component } from 'react';
import Pokemonlist from './Pokemonlist';
import Pokedex from './Pokedex';
const chose = (Pokemonlis, numberOf) => {
    let newArry = [];
    for (let index = 0; index < numberOf; index++) {
        newArry.push(Pokemonlis[Math.floor(Math.random() * Pokemonlis.length)]);

    }
    return newArry;
}
class Pokegame extends Component {
    render() {
        const firstHand = chose(Pokemonlist, 4);
        const secondHand = chose(Pokemonlist, 4);

        return (
            <div>
                <Pokedex 
                pokemonlist= {firstHand}
                />

                <Pokedex 
                pokemonlist= {secondHand}
                />


            </div>
        );
    }
}
export default Pokegame;