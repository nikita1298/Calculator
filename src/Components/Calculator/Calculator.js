import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import NumberPad from './NumberPad';
import './NumberPad.css';
import Arithmetical from './Arithmetic';
import ResultScreen from './ResultScreen';
import 'react-toastify/dist/ReactToastify.css';


function Display() {

    const [state, setState] = useState({
        result: "",
        operator: null,
        history: []

    })

    const onNumberPadClick = (number) => {
        setState({ ...state, number, result: state.result + number });
    }

    const onOpearatorClick = (op) => {
        setState({ ...state, operator: op, result: state.result + op });
    }
    const onEqualClick = () => {
        try {
            const res = eval(state.result);
            toast("Success!!");

            setState({ history: [...state.history, state.result + '=' + res], result: eval(state.result) });
        }
        catch (error) {
            toast("Error!!");
        };
    }

    var coloumClass = ["col"];
    return (
        <Container fluid className="offset-md-4 offset-lg-5 col-md-6 col-lg-3" >
            <br />
            <Card className="col-md-12 col-lg-12">
                <Row className="show-grid" >
                    <Col xs={12} className={coloumClass}>
                        <ResultScreen result={state.result} sample={state.history} />
                    </Col>
                </Row>
                <Row className="show-grid ">
                    <Col xs={10} md={10} className={coloumClass}>
                        <NumberPad
                            onEqualClick={onEqualClick}
                            onNumberPadClick={onNumberPadClick} />
                    </Col>
                    <Col xs={2} md={2} className={coloumClass}>
                        <Arithmetical onOpearatorClick={onOpearatorClick} />
                    </Col>
                </Row>
            </Card>
            <ToastContainer type="primary" className="primary" />
        </Container >
    );

}



export default Display;