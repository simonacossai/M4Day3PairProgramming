import React from 'react';
import { Container, Row, Col, Card, FormControl } from "react-bootstrap";
import romance from '../../data/romance.json';
import SingleBook from '../SingleBook/SingleBook';

class BookList extends React.Component {
    state = {
        books: romance,
    }


    searchBooks = (query) => {
        if (query) {
            let filteredBooks = this.state.books.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase())
            );
            this.setState({ books: filteredBooks });
        } else {
            this.setState({ books: romance });
        }
    };
 
    render(props) {
        return (
            <div>
                <Container className=" justify-content-center mt-3 mb-4">
                    <div className="d-flex align-items-center">
                        <h1>BookList</h1>
                        <FormControl
                            placeholder="Search Books by Title"
                            aria-label="Search"
                            className="ml-3"
                            style={{ width: "300px" }}
                            aria-describedby="basic-addon1"
                            onChange={(e) => this.searchBooks(e.target.value)}
                        />
                    </div>
                    <hr className="my-2" />
                    <Row className="justify-content-start mt-3">
                        <Col>
                        {this.state.books.map((romance) => (
                            <SingleBook book={romance} key={romance.asin} />
                        ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BookList;