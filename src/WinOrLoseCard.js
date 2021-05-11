import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

class WinOrLoseCard extends Component {
	render() {
		let backgroundColor;
		let borderColor;
		if (this.props.isWinner) {
			borderColor = `#1cc414`;
			backgroundColor = `#c9f5c6`;
		} else {
			borderColor = `#c41414`;
			backgroundColor = `#f5c6c6`;
		}
		return (
			<Container>
				<Row>
					<Col />
					<Col md="2">
						<Card
							style={{
								borderColor: borderColor,
								borderWidth: '.25rem',
								backgroundColor: backgroundColor,
								textAlign: 'center',
								width: '15em',
								height: 'auto'
							}}
						>
							<Card.Body>
								<Card.Title>{this.props.isWinner ? 'Winner' : 'Loser'}</Card.Title>
								<Card.Subtitle>Total Exp: {this.props.exp}</Card.Subtitle>
							</Card.Body>
						</Card>
					</Col>
					<Col />
				</Row>
			</Container>
		);
	}
}

export default WinOrLoseCard;
