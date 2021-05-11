import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Pokecard.css';

//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
	render() {
		let imageSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
		let borderColor;
		switch (this.props.type) {
			case `Bug`:
				borderColor = `#a9ba0d`;
				break;
			case `Dragon`:
				borderColor = `#6824c7`;
				break;
			case `Electric`:
				borderColor = `#e6c809`;
				break;
			case `Fairy`:
				borderColor = `#dba2c9`;
				break;
			case `Fighting`:
				borderColor = `#bd3f2b`;
				break;
			case `Fire`:
				borderColor = `#e87f2e`;
				break;
			case `Flying`:
				borderColor = `#c495e8`;
				break;
			case `Ghost`:
				borderColor = `#5d3e80`;
				break;
			case `Grass`:
				borderColor = `#73c95b`;
				break;
			case `Ground`:
				borderColor = `#d4b86c`;
				break;
			case `Ice`:
				borderColor = `#a4edeb`;
				break;
			case `Normal`:
				borderColor = `#a2a86c`;
				break;
			case `Poison`:
				borderColor = `#752d6d`;
				break;
			case `Psychic`:
				borderColor = `#eb6cb4`;
				break;
			case `Rock`:
				borderColor = `#a68b2b`;
				break;
			case `Water`:
				borderColor = `#6279e3`;
				break;
			default:
				borderColor = `white`;
		}
		return (
			<Container>
				<Card style={{ borderColor: borderColor, borderWidth: '.5rem' }} className={`Pokecard`}>
					<Card.Body>
						<Card.Title>{this.props.name}</Card.Title>
						<Card.Subtitle>{this.props.type}</Card.Subtitle>
						<Card.Text>Exp:{this.props.exp}</Card.Text>
					</Card.Body>
					<Card.Img variant="bottom" src={imageSrc} />
				</Card>
			</Container>

			// <div className="Pokecard">
			// 	<h1 className="Pokecard-name">{this.props.name}</h1>
			// 	<img className="Pokecard-img" src={imageSrc} alt="pokemon" />
			// 	<p className="Pokecard-data">Type: {this.props.type}</p>
			// 	<p className="Pokecard-data">Exp: {this.props.exp}</p>
			// </div>
		);
	}
}

export default Pokecard;
