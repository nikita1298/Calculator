import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Container, TabContainer, Tab, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class View extends React.Component {
    state = {
        questions: [
            { id: 1, q: 'Error of 0 ?', a: 'not Divisibe by 0.' },
            { id: 2, q: 'Error of 0 ?', a: 'not Divisibe by 0.' },
            { id: 3, q: 'Error of 0 ?', a: 'not Divisibe by 0.' },
            { id: 4, q: 'Error of 0 ?', a: 'not Divisibe by 0.' },
            { id: 5, q: 'Error of 0 ?', a: 'not Divisibe by 0.' },
            { id: 6, q: 'Error of 0 ?', a: 'not Divisibe by 0.' },
            { id: 7, q: 'Error of 0 ?', a: 'not Divisibe by 0.' }
        ]
    }
    viewAns = (id) => {
        const items = this.state.questions;

        items.map(item => {
            if (item.id === id) {
                alert('Ans is' + item.a);

            }
        });

        // alert('View this answer', ans);

    }

    render() {
        const items = this.state.questions;
        return (
            <div>
                <Container>
                    <Row>
                        <Col style={{ backgroundColor: 'skyblue' }}>1 of 1</Col>
                        <Col style={{ backgroundColor: 'blue' }}>1 of 1</Col>
                    </Row>
                    <Row>
                        <Col style={{ backgroundColor: 'pink' }}>1 of 1</Col>
                    </Row>
                    {/* <ListGroup>
                        <TransitionGroup>
                            {items.map(item => (
                                <CSSTransition key={item.id} timeout={500} classNames="fade" >
                                    <ListGroupItem>
                                        {item.a}
                                        <Button
                                            color="View"
                                            size="sm"
                                            onClick={this.viewAns.bind(this, item.id)} >Ans</Button>
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup> */}
                </Container>

            </div>
        );
    }
}

export default View;