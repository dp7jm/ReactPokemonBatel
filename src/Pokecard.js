import React, {Component} from 'react';
import './Pokecard.css';
const imageSource = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render(){
        return(
            <div className = "Pokecard">
                <h1>{this.props.name}</h1>
                <img src = {`${imageSource}009.png`}/>
                <p>{this.props.id}</p>
                <p>{this.props.experience_point}</p>


                
                

            </div>
        );
    }

}

export default Pokecard;