import React from 'react';
import { Container, Row, Col, Card, FormControl } from "react-bootstrap";
import romance from '../../data/romance.json';
import SingleBook from '../SingleBook/SingleBook';

class BookList extends React.Component {
  
    render(props) {
        return (
            <div>
                <Container className=" justify-content-center mt-3 mb-4">
                    <div className="d-flex align-items-center">
                        <h1>BookList</h1>
            
                    </div>
                    <hr className="my-2" />
                    <Row className="justify-content-start mt-3">
                        {romance.map((romance) => (
                            <SingleBook book={romance}/>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BookList;