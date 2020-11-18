/*Create a SingleBook component as a function. The component receives a
book object as a prop, and displays the cover and the title of the book.
Use react-bootstrap Cards to display a book (The book object can be read
from the one of the .json book files we gave you yesterday)
*/

import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import MyBadge from '../MyBadge/MyBadge';
import './SingleBook.css';

class SingleBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: props.book,
            selected: false,
        };
    }
    select = () => {
        this.setState({
            selected: this.state.selected == false ? true : false,
        });
        console.log(this.state.selected);
    };
    render() {
        return (

            <>
                <Col className="mt-3" xs={4}>
                    <Card style={{ width: '18rem' }} onClick={(e) => this.select()} style={this.state.selected === true ? { border: "2px solid rgba(0,0,0,0.4)" } : { border: null }} className="card">
                        <Card.Img variant="top" src={this.state.book.img} className="books-image" />
                        <Card.Body>
                            <Card.Title className="title" >{this.state.book.title}</Card.Title>
                            <div className="d-flex justify-content-between align-items-center text-center mt-2">
                                <MyBadge text={this.state.book.category} colour="success"></MyBadge>
                                <small className="text-muted">${this.state.book.price}</small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
};

export default SingleBook;