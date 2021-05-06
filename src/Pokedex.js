import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	static defaultProps = {
		pokemon: [
			{ id: 1, name: 'Bulbasaur', type: 'Grass', exp: 64 },
			{ id: 2, name: 'Ivysaur', type: 'Grass', exp: 142 },
			{ id: 3, name: 'Venasaur', type: 'Grass', exp: 263 },
			{ id: 4, name: 'Charmander', type: 'Fire', exp: 62 },
			{ id: 5, name: 'Charmeleon', type: 'Fire', exp: 142 },
			{ id: 6, name: 'Charizard', type: 'Fire', exp: 267 },
			{ id: 7, name: 'Squirtle', type: 'Water', exp: 63 },
			{ id: 8, name: 'Wartortle', type: 'Water', exp: 142 },
			{ id: 9, name: 'Blastoise', type: 'Water', exp: 265 },
			{ id: 10, name: 'Caterpie', type: 'Bug', exp: 39 },
			{ id: 11, name: 'Metapod', type: 'Bug', exp: 72 },
			{ id: 12, name: 'Butterfree', type: 'Bug', exp: 198 },
			{ id: 16, name: 'Pidgey', type: 'Flying', exp: 50 },
			{ id: 17, name: 'Pidgeotto', type: 'Flying', exp: 122 },
			{ id: 18, name: 'Pidgeot', type: 'Flying', exp: 240 },
			{ id: 25, name: 'Pikachu', type: 'Electric', exp: 112 },
			{ id: 26, name: 'Raichu', type: 'Electric', exp: 243 },
			{ id: 37, name: 'Vulpix', type: 'Fire', exp: 60 },
			{ id: 38, name: 'Ninetales', type: 'Fire', exp: 177 },
			{ id: 39, name: 'Jigglypuff', type: 'Fairy', exp: 95 },
			{ id: 40, name: 'Wigglytuff', type: 'Fairy', exp: 218 },
			{ id: 48, name: 'Venonat', type: 'Bug', exp: 61 },
			{ id: 49, name: 'Venomoth', type: 'Bug', exp: 158 },
			{ id: 54, name: 'Psyduck', type: 'Water', exp: 64 },
			{ id: 55, name: 'Golduck', type: 'Bug', exp: 175 },
			{ id: 58, name: 'Growlithe', type: 'Fire', exp: 70 },
			{ id: 59, name: 'Arcanine', type: 'Fire', exp: 194 },
			{ id: 66, name: 'Machop', type: 'Fighting', exp: 61 },
			{ id: 67, name: 'Machoke', type: 'Fighting', exp: 142 },
			{ id: 68, name: 'Machamp', type: 'Fighting', exp: 253 },
			{ id: 74, name: 'Geodude', type: 'Rock', exp: 60 },
			{ id: 75, name: 'Graveler', type: 'Rock', exp: 137 },
			{ id: 76, name: 'Golem', type: 'Rock', exp: 248 },
			{ id: 86, name: 'Seel', type: 'Water', exp: 65 },
			{ id: 87, name: 'Dewgong', type: 'Water', exp: 166 },
			{ id: 92, name: 'Gastly', type: 'Ghost', exp: 62 },
			{ id: 93, name: 'Haunter', type: 'Ghost', exp: 142 },
			{ id: 94, name: 'Gengar', type: 'Ghost', exp: 250 },
			{ id: 95, name: 'Onix', type: 'Rock', exp: 77 },
			{ id: 104, name: 'Cubone', type: 'Ground', exp: 64 },
			{ id: 105, name: 'Marowak', type: 'Ground', exp: 149 },
			{ id: 109, name: 'Koffing', type: 'Poison', exp: 68 },
			{ id: 110, name: 'Weezing', type: 'Poison', exp: 172 },
			{ id: 123, name: 'Scyther', type: 'Bug', exp: 100 },
			{ id: 124, name: 'Jynx', type: 'Ice', exp: 159 },
			{ id: 130, name: 'Gyarados', type: 'Water', exp: 189 },
			{ id: 133, name: 'Eevee', type: 'Normal', exp: 65 },
			{ id: 134, name: 'Vaporeon', type: 'Water', exp: 184 },
			{ id: 135, name: 'Jolteon', type: 'Electric', exp: 184 },
			{ id: 136, name: 'Flareon', type: 'Fire', exp: 184 },
			{ id: 143, name: 'Snorlax', type: 'Normal', exp: 189 },
			{ id: 144, name: 'Articuno', type: 'Ice', exp: 290 },
			{ id: 145, name: 'Zapdos', type: 'Electric', exp: 290 },
			{ id: 146, name: 'Motres', type: 'Fire', exp: 290 },
			{ id: 147, name: 'Dratini', type: 'Dragon', exp: 60 },
			{ id: 148, name: 'Dragonair', type: 'Dragon', exp: 147 },
			{ id: 149, name: 'Dragonite', type: 'Dragon', exp: 300 },
			{ id: 150, name: 'Mewtwo', type: 'Psychic', exp: 340 },
			{ id: 151, name: 'Mew', type: 'Psychic', exp: 300 }
		]
	};
	render() {
		return (
			<div className="Pokedex">
				<p>Total Exp: {this.props.exp}</p>
				<p>{this.props.isWinner ? 'Winner' : 'Loser'}</p>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p) => {
						return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />;
					})}
				</div>
			</div>
		);
	}
}

export default Pokedex;
