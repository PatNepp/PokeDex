import React, { Component } from 'react';
import './Pokecard.css';

//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
	render() {
		let imageSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-name">{this.props.name}</h1>
				<img className="Pokecard-img" src={imageSrc} alt="pokemon" />
				<p className="Pokecard-data">Type: {this.props.type}</p>
				<p className="Pokecard-data">Exp: {this.props.exp}</p>
			</div>
		);
	}
}

export default Pokecard;
