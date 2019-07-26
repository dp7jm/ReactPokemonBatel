import React, {Component} from 'react';
import './Pokecard.css';


class Pokecard extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <img src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'/>
                <p>{this.props.id}</p>
                <p>{this.props.experience_point}</p>


                
                

            </div>
        );
    }

}

export default Pokecard;