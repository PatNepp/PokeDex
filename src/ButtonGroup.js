import React, {Component} from "react";
import { Container, Row, Button, Col } from "react-bootstrap";


class ButtonGroup extends Component {
    render(){
        const handleBattle = () => {
            
        }

        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col><Button size="sm">Instructions</Button></Col>
                    <Col><Button size="lg" onClick={handleBattle}>BATTLE</Button></Col>
                    <Col><Button size="sm">New Decks</Button></Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default ButtonGroup;