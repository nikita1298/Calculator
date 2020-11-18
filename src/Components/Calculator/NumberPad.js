import React from 'react';
import { Row, Col, Button, ButtonGroup, Container } from 'react-bootstrap';
import './NumberPad.css';

const numberPad = (props) => {
    var classesbtn = ["col-md-12 btn-md btnR"]
    return (
        <div>
            <Container>
                <Row>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="1" className={classesbtn.join(' ')} variant="light">1</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="2" variant="light" className={classesbtn.join(' ')}>2</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="3" variant="light" className={classesbtn.join(' ')}  >3</Button>
                    </Col>
                </Row>

                <Row>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="4" className={classesbtn.join(' ')} variant="light">4</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="5" variant="light" className={classesbtn.join(' ')}>5</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="6" variant="light" className={classesbtn.join(' ')}  >6</Button>
                    </Col>
                </Row>

                <Row>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="7" className={classesbtn.join(' ')} variant="light">7</Button>
                    </Col>
                    <Col className="col"  >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="8" variant="light" className={classesbtn.join(' ')}>8</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="9" variant="light" className={classesbtn.join(' ')}  >9</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="col"   >
                        <Button onClick={(e) => { props.onNumberPadClick(e.target.name) }} name="0" className={classesbtn.join(' ')} variant="light">0</Button>
                    </Col>
                    <Col className="col"  >
                        <Button onClick={(e) => { props.onNumberPadClick('.') }} variant="light " className={classesbtn.join(' ')}>.</Button>
                    </Col>
                    <Col className="col"  >
                        <Button onClick={props.onEqualClick} variant="dark" className={classesbtn.join(' ')}>=</Button>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default numberPad;