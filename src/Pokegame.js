import React, { Component } from 'react';
import Pokemonlist from './Pokemonlist';
import Pokedex from './Pokedex';
import pokemonList from './Pokemonlist';
const chose = (pokemonL, numberOf) => {
    let newArry = [];
    for (let index = 0; index < numberOf; index++) {
        newArry.push(pokemonL[Math.floor(Math.random() * pokemonL.length)]);

    }
    return newArry;
}
const calculateScore = (pokemonL) =>{
    let finalScore = 0;
    pokemonL.map((p)=>{
        finalScore += p.exp;
    })
    return finalScore;
}
class Pokegame extends Component {
    render() {
        const firstHand = chose(Pokemonlist, 4);
        const secondHand = chose(Pokemonlist, 4);
        const firstScore = calculateScore(firstHand);
        const secondScore = calculateScore(secondHand);

        return (
            <div>
                <h1>{`First Score: ${firstScore} points`}</h1>
                <Pokedex 
                pokemonlist= {firstHand}
                score= {firstScore}
                />
                <h1>{`Second Score: ${secondScore} points`}</h1>

                <Pokedex 
                pokemonlist= {secondHand}
                score= {secondScore}
                />

            </div>
        );
    }
}
export default Pokegame;