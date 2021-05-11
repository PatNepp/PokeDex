import React, { Component } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';

class ButtonGroup extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col />
					<Col>
						<Button size="sm" onClick={this.props.handleIntrust}>
							Instructions
						</Button>
					</Col>
					<Col>
						<Button size="lg" onClick={this.props.handleBattle}>
							BATTLE
						</Button>
					</Col>
					<Col>
						<Button size="sm" onClick={this.props.handleReset}>
							New Decks
						</Button>
					</Col>
					<Col />
				</Row>
			</Container>
		);
	}
}

export default ButtonGroup;
