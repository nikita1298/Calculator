import React, { useState } from 'react';
import { Row, Col, Button, ButtonGroup, Container } from 'react-bootstrap';
import './NumberPad.css';

const Arithmetical = (props) => {
    const [operator, setOperator] = useState({ sign: '' });
    var classesbtn = ["col-md-12 btn-md btnR warning"]
    return (
        <div>
            <Container>
                <Row>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onOpearatorClick(e.target.name) }} name="/" className={classesbtn.join(' ')} variant="warning">/</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onOpearatorClick(e.target.name) }} name="*" variant="warning" className={classesbtn.join(' ')}>x</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onOpearatorClick(e.target.name) }} name="+" variant="warning" className={classesbtn.join(' ')}  >+</Button>
                    </Col>
                    <Col className="col" >
                        <Button onClick={(e) => { props.onOpearatorClick(e.target.name) }} name="-" variant="warning" className={classesbtn.join(' ')}  >-</Button>
                    </Col>
                </Row>
                </Container>
        </div >
    )
}


export default Arithmetical;