import React, { Component } from 'react';
import Pokemonlist from './Pokemonlist';
import Pokedex from './Pokedex';
import pokemonList from './Pokemonlist';
import './Pokegame.css';
const chose = (pokemonL, numberOf) => {
    let newArry = [];
    for (let index = 0; index < numberOf; index++) {
        newArry.push(pokemonL[Math.floor(Math.random() * pokemonL.length)]);

    }
    return newArry;
}
const calculateScore = (pokemonL) =>{
    let finalScore = 0;
    pokemonL.forEach(p =>{
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
            <div className = 'Pokegame'>
                
                <Pokedex 
                pokemonlist= {firstHand}
                score= {firstScore}
                winer= {firstScore>secondScore}
                />                

                <Pokedex 
                pokemonlist= {secondHand}
                score= {secondScore}
                winer= {secondScore>firstScore}
                />

            </div>
        );
    }
}
export default Pokegame;