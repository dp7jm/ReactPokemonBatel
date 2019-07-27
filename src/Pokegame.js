import React, {Component} from 'react';
import Pokemonlist from './Pokemonlist';
const chose = (Pokemonlist, numberOf) => {
    this.numberOf = 4;
    let newArry = [];
   for (let index = 0; index < numberOf; index++) {
    newArry.push(Pokemonlist[Math.random]);
          
   } 
   return newArry;
}
class Pokegame extends Component {
    render() {
        
        return(
            <div>


            </div>
        );
    }
}
export default Pokegame;