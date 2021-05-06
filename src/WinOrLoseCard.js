import React, {Component} from "react";
import { Card, Container } from "react-bootstrap";

class WinOrLoseCard extends Component {
    render() {
        return (
            <Container>
                <Card border={`primary`}>
                    <Card.Body>
                        <Card.Title>{this.props.isWinner ? 'Winner' : 'Loser'}</Card.Title>
                        <Card.Subtitle>Total Exp: {this.props.exp}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Container>
     
        )
    }
}

export default WinOrLoseCard;