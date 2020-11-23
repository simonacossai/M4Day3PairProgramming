/*Create a SingleBook component as a function. The component receives a
book object as a prop, and displays the cover and the title of the book.
Use react-bootstrap Cards to display a book (The book object can be read
from the one of the .json book files we gave you yesterday)
*/

import React from 'react';
import { Col, Card } from "react-bootstrap";
import MyBadge from '../MyBadge/MyBadge';
import './SingleBook.css';
import CommentList from '../CommentList';

class SingleBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: props.book,
            selected: false,
        };
    }


    render() {
        return (
            <>
                <Col className="mt-3" md={4}>
                    <Card style={{ width: '18rem' }} className="card"  style={this.state.selected === true ? { border: "2px solid rgba(0,0,0,0.4)" } : { border: null }} >
                        <Card.Img variant="top" src={this.state.book.img} className="books-image" />
                        <Card.Body>
                            <p>{this.state.id}</p>
                            <Card.Title className="title" >{this.state.book.title}</Card.Title>
                            <div className="d-flex justify-content-between align-items-center text-center mt-2">
                                <MyBadge text={this.state.book.category} colour="success"></MyBadge>
                                <small className="text-muted">${this.state.book.price}</small>
                            </div>
                            <CommentList comments={this.state.comments} bookId={this.props.book.asin} onNewComment={this.onNewComment} onDeleteComment={this.onDeleteComment} updateComment={this.updateComment}/>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
    onNewComment=(newComment)=>{
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }
    onDeleteComment=(commentId)=>{
        this.setState({
            comments: this.state.comments.filter(comment=> comment._id !== commentId)
        })
    }
    updateComment=(updateComment)=>{
        const toUpdate= this.state.comments.map(element=>element._id).indexOf(updateComment._id)
        this.state.comments[toUpdate]= updateComment
        this.setState({
            comments: this.state.comments
        })
    }
    componentDidMount= async()=>{
        const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+ this.props.book.asin,{
            headers: new Headers({
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2YzMzMzk4MzViMDAwMTc1ODRmYTciLCJpYXQiOjE2MDU4MTMwNDMsImV4cCI6MTYwNzAyMjY0M30.i8M58Iu5HLuzDGj0-aElzPhilaoSKG3Ma9eTqn3kpd4",
            })
        })
        const getComments = await res.json();
        this.setState({
            comments: getComments
        })
    }
};

export default SingleBook;