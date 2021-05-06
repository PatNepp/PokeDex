import React, {Component} from "react";
import { Container, Row, Button, Col } from "react-bootstrap";


class ButtonGroup extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col><Button>Instructions</Button></Col>
                    <Col><Button>BATTLE</Button></Col>
                    <Col><Button>New Decks</Button></Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default ButtonGroup;