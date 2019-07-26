import React, {Component} from 'react';
import './Pokecard.css';
const imageSource = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render(){
        return(
            <div className = "Pokecard">
                <h1>{this.props.name}</h1>
                <img className = "Pokecard-img" src = {`${imageSource}009.png`} alt = {this.props.name}/>
                <div>{this.props.id}</div>
                <div>{this.props.experience_point}</div>


                


            </div>
        );
    }

}

export default Pokecard;