import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import ButtonGroup from './ButtonGroup';
import Pokedex from './Pokedex';
import WinOrLoseCard from './WinOrLoseCard';

class Pokegame extends Component {
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
			{ id: 13, name: 'Weedle', type: 'Bug', exp: 39 },
			{ id: 14, name: 'Kakuna', type: 'Bug', exp: 72 },
			{ id: 15, name: 'Beedrill', type: 'Bug', exp: 198 },
			{ id: 16, name: 'Pidgey', type: 'Flying', exp: 50 },
			{ id: 17, name: 'Pidgeotto', type: 'Flying', exp: 122 },
			{ id: 18, name: 'Pidgeot', type: 'Flying', exp: 240 },
			{ id: 19, name: 'Rattata', type: 'Normal', exp: 51 },
			{ id: 20, name: 'Raticate', type: 'Normal', exp: 145 },
			{ id: 21, name: 'Spearow', type: 'Flying', exp: 52 },
			{ id: 22, name: 'Fearow', type: 'Flying', exp: 155 },
			{ id: 23, name: 'Ekans', type: 'Poison', exp: 58 },
			{ id: 24, name: 'Arbok', type: 'Poison', exp: 157 },
			{ id: 25, name: 'Pikachu', type: 'Electric', exp: 112 },
			{ id: 26, name: 'Raichu', type: 'Electric', exp: 243 },
			{ id: 27, name: 'Sandshrew', type: 'Ground', exp: 60 },
			{ id: 28, name: 'Sandslash', type: 'Ground', exp: 158 },
			{ id: 29, name: 'Nidoran♀', type: 'Poison', exp: 55 },
			{ id: 30, name: 'Nidorina', type: 'Poison', exp: 128 },
			{ id: 31, name: 'Nidoqueen', type: 'Poison', exp: 253 },
			{ id: 32, name: 'Nidoran♂', type: 'Poison', exp: 55 },
			{ id: 33, name: 'Nidorino', type: 'Poison', exp: 128 },
			{ id: 34, name: 'NidoKing', type: 'Poison', exp: 253 },
			{ id: 35, name: 'Clefairy', type: 'Fairy', exp: 113 },
			{ id: 36, name: 'Clefable', type: 'Fairy', exp: 242 },
			{ id: 37, name: 'Vulpix', type: 'Fire', exp: 60 },
			{ id: 38, name: 'Ninetales', type: 'Fire', exp: 177 },
			{ id: 39, name: 'Jigglypuff', type: 'Fairy', exp: 95 },
			{ id: 40, name: 'Wigglytuff', type: 'Fairy', exp: 218 },
			{ id: 41, name: 'Zubat', type: 'Poison', exp: 49 },
			{ id: 42, name: 'Golbat', type: 'Poison', exp: 159 },
			{ id: 43, name: 'Oddish', type: 'Grass', exp: 64 },
			{ id: 44, name: 'Gloom', type: 'Grass', exp: 138 },
			{ id: 45, name: 'Vileplume', type: 'Grass', exp: 245 },
			{ id: 46, name: 'Paras', type: 'Bug', exp: 57 },
			{ id: 47, name: 'Parasect', type: 'Bug', exp: 142 },
			{ id: 48, name: 'Venonat', type: 'Bug', exp: 61 },
			{ id: 49, name: 'Venomoth', type: 'Bug', exp: 158 },
			{ id: 50, name: 'Diglett', type: 'Ground', exp: 53 },
			{ id: 51, name: 'Dugtrio', type: 'Ground', exp: 149 },
			{ id: 52, name: 'Meowth', type: 'Normal', exp: 58 },
			{ id: 53, name: 'Persian', type: 'Normal', exp: 154 },
			{ id: 54, name: 'Psyduck', type: 'Water', exp: 64 },
			{ id: 55, name: 'Golduck', type: 'Water', exp: 175 },
			{ id: 56, name: 'Mankey', type: 'Fighting', exp: 61 },
			{ id: 57, name: 'Primeape', type: 'Fighting', exp: 159 },
			{ id: 58, name: 'Growlithe', type: 'Fire', exp: 70 },
			{ id: 59, name: 'Arcanine', type: 'Fire', exp: 194 },
			{ id: 60, name: 'Poliwag', type: 'Water', exp: 60 },
			{ id: 61, name: 'Poliwhirl', type: 'Water', exp: 135 },
			{ id: 62, name: 'Poliwrath', type: 'Water', exp: 255 },
			{ id: 63, name: 'Abra', type: 'Psychic', exp: 62 },
			{ id: 64, name: 'Kadabra', type: 'Psychic', exp: 140 },
			{ id: 65, name: 'Alakazam', type: 'Psychic', exp: 250 },
			{ id: 66, name: 'Machop', type: 'Fighting', exp: 61 },
			{ id: 67, name: 'Machoke', type: 'Fighting', exp: 142 },
			{ id: 68, name: 'Machamp', type: 'Fighting', exp: 253 },
			{ id: 69, name: 'Bellsprout', type: 'Grass', exp: 60 },
			{ id: 70, name: 'Weepinbell', type: 'Grass', exp: 137 },
			{ id: 71, name: 'Victreebel', type: 'Grass', exp: 245 },
			{ id: 72, name: 'Tentacool', type: 'Water', exp: 67 },
			{ id: 73, name: 'Tentacruel', type: 'Water', exp: 180 },
			{ id: 74, name: 'Geodude', type: 'Rock', exp: 60 },
			{ id: 75, name: 'Graveler', type: 'Rock', exp: 137 },
			{ id: 76, name: 'Golem', type: 'Rock', exp: 248 },
			{ id: 77, name: 'Ponyta', type: 'Fire', exp: 82 },
			{ id: 78, name: 'Rapidash', type: 'Fire', exp: 175 },
			{ id: 79, name: 'Slowpoke', type: 'Water', exp: 63 },
			{ id: 80, name: 'Slowbro', type: 'Water', exp: 172 },
			{ id: 81, name: 'Magnemite', type: 'Electric', exp: 65 },
			{ id: 82, name: 'Magneton', type: 'Electric', exp: 163 },
			{ id: 83, name: 'Farfetch\'d', type: 'Fighting', exp: 132 },
			{ id: 84, name: 'Doduo', type: 'Normal', exp: 62 },
			{ id: 85, name: 'Dodrio', type: 'Normal', exp: 165 },
			{ id: 86, name: 'Seel', type: 'Water', exp: 65 },
			{ id: 87, name: 'Dewgong', type: 'Water', exp: 166 },
			{ id: 88, name: 'Grimer', type: 'Poison', exp: 65 },
			{ id: 89, name: 'Muk', type: 'Poison', exp: 175 },
			{ id: 90, name: 'Shellder', type: 'Water', exp: 61 },
			{ id: 91, name: 'Clyster', type: 'Water', exp: 184 },
			{ id: 92, name: 'Gastly', type: 'Ghost', exp: 62 },
			{ id: 93, name: 'Haunter', type: 'Ghost', exp: 142 },
			{ id: 94, name: 'Gengar', type: 'Ghost', exp: 250 },
			{ id: 95, name: 'Onix', type: 'Rock', exp: 77 },
			{ id: 96, name: 'Drowzee', type: 'Psychic', exp: 66 },
			{ id: 97, name: 'Hypno', type: 'Psychic', exp: 169 },
			{ id: 98, name: 'Krabby', type: 'Water', exp: 65 },
			{ id: 99, name: 'Kingler', type: 'Water', exp: 166 },
			{ id: 100, name: 'Voltorb', type: 'Electric', exp: 66 },
			{ id: 101, name: 'Electrode', type: 'Electric', exp: 172 },
			{ id: 102, name: 'Exeggcute', type: 'Grass', exp: 65 },
			{ id: 103, name: 'Exeggutor', type: 'Grass', exp: 186 },
			{ id: 104, name: 'Cubone', type: 'Ground', exp: 64 },
			{ id: 105, name: 'Marowak', type: 'Ground', exp: 149 },
			{ id: 106, name: 'Hitmonlee', type: 'Fighting', exp: 159 },
			{ id: 107, name: 'Hitmonchan', type: 'Fighting', exp: 159 },
			{ id: 108, name: 'Lickitung', type: 'Normal', exp: 77 },
			{ id: 109, name: 'Koffing', type: 'Poison', exp: 68 },
			{ id: 110, name: 'Weezing', type: 'Poison', exp: 172 },
			{ id: 111, name: 'Ryhorn', type: 'Ground', exp: 69 },
			{ id: 112, name: 'Rhydon', type: 'Ground', exp: 170 },
			{ id: 113, name: 'Chansey', type: 'Normal', exp: 395 },
			{ id: 114, name: 'Tangela', type: 'Grass', exp: 87 },
			{ id: 115, name: 'Kangaskhan', type: 'Normal', exp: 172 },
			{ id: 116, name: 'Horsea', type: 'Water', exp: 59 },
			{ id: 117, name: 'Seadra', type: 'Water', exp: 154 },
			{ id: 118, name: 'Goldeen', type: 'Water', exp: 64 },
			{ id: 119, name: 'Seaking', type: 'Water', exp: 158 },
			{ id: 120, name: 'Staryu', type: 'Water', exp: 68 },
			{ id: 121, name: 'Starmie', type: 'Water', exp: 182 },
			{ id: 122, name: 'Mr. Mime', type: 'Psychic', exp: 161 },
			{ id: 123, name: 'Scyther', type: 'Bug', exp: 100 },
			{ id: 124, name: 'Jynx', type: 'Ice', exp: 159 },
			{ id: 125, name: 'Electabuzz', type: 'Electric', exp: 172 },
			{ id: 126, name: 'Magmar', type: 'Fire', exp: 173 },
			{ id: 127, name: 'Pinsir', type: 'Bug', exp: 175 },
			{ id: 128, name: 'Tauros', type: 'Normal', exp: 172 },
			{ id: 129, name: 'Magikarp', type: 'Water', exp: 40 },
			{ id: 130, name: 'Gyarados', type: 'Water', exp: 189 },
			{ id: 131, name: 'Lapras', type: 'Water', exp: 187 },
			{ id: 132, name: 'Ditto', type: 'Normal', exp: 101 },
			{ id: 133, name: 'Eevee', type: 'Normal', exp: 65 },
			{ id: 134, name: 'Vaporeon', type: 'Water', exp: 184 },
			{ id: 135, name: 'Jolteon', type: 'Electric', exp: 184 },
			{ id: 136, name: 'Flareon', type: 'Fire', exp: 184 },
			{ id: 137, name: 'Porygon', type: 'Normal', exp: 79 },
			{ id: 138, name: 'Omanyte', type: 'Rock', exp: 71 },
			{ id: 139, name: 'Omastar', type: 'Rock', exp: 173 },
			{ id: 140, name: 'Kabuto', type: 'Rock', exp: 71 },
			{ id: 141, name: 'Kabutops', type: 'Rock', exp: 173 },
			{ id: 142, name: 'Aerodactyl', type: 'Rock', exp: 180 },
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
		let pokemon = [ ...this.props.pokemon ];
		let hand1 = [];
		let hand2 = [];
		for (let i = 0; i < 8; i++) {
			let rand = Math.floor(Math.random() * pokemon.length);
			hand2.push(pokemon[rand]);
			pokemon.splice(rand, 1);
		}
		while (hand1.length < hand2.length) {
			let randIdx = Math.floor(Math.random() * hand2.length);
			let randPokemon = hand2.splice(randIdx, 1)[0];
			hand1.push(randPokemon);
		}

		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
		let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
		return (
			<Container fluid>
				<Pokedex pokemon={hand1} />
				<WinOrLoseCard exp={exp1} isWinner={exp1 > exp2} />
				<ButtonGroup />
				<WinOrLoseCard exp={exp2} isWinner={exp2 > exp1} />
				<Pokedex pokemon={hand2} />
			</Container>
		);
	}
}

export default Pokegame;
