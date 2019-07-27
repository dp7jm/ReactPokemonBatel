import React, {Component} from 'react';
import './Pokecard.css';
const imageSource = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const adres = (id) => {
    if (id<10) {
        return `${imageSource}00${id}.png`;
    }  
    else if (id<100) {
        return `${imageSource}0${id}.png`;
    }  
    else {
        return `${imageSource}${id}.png`;
       
    }
}
class Pokecard extends Component {
    render(){
        const {name, id, exp, type} = this.props;
        return(
            <div className = "Pokecard">
                <h1>{this.props.name}</h1>
                <img className = "Pokecard-img" src = {`${adres(this.props.id)}`} alt = {this.props.name}/>
                <div>{this.props.id}</div>
                <div>{this.props.exp}</div>

            </div>
        );
    }

}

export default Pokecard;