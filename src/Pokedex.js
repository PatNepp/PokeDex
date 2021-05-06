import React, { Component } from 'react';
import CardDeck from "react-bootstrap/CardDeck"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Pokecard from './Pokecard';
import './Pokedex.css';


	// <div className="Pokedex"></div>

				// {/* <div className="Pokedex-cards">
				// 	{this.props.pokemon.map((p) => {
				// 		return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />;
				// 	})}
				// </div> */}
class Pokedex extends Component {
	render() {
		return (
			<Container fluid>
				<Row>Total Exp: {this.props.exp}</Row>
				<Row>{this.props.isWinner ? 'Winner' : 'Loser'}</Row>
				<Row>
					{this.props.pokemon.map((p) => {
						return (
							<Col>
								<Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
							</Col>
						)
					})}
				</Row>
			</Container>
		
			
		);
	}
}

export default Pokedex;
