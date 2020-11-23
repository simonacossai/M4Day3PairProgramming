import React from 'react';
import { Col, Card, FormControl, Button } from "react-bootstrap";
import './CommentListItem.css';

class CommentCreator extends React.Component {

        state = {
           rate:0,
           comment: ""
        };

        sendComment= async()=>{
            const toSend= {
                rate: this.state.rate,
                comment: this.state.comment,
                elementId: this.props.bookId,
            }
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/",{
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2YzMzMzk4MzViMDAwMTc1ODRmYTciLCJpYXQiOjE2MDU4MTMwNDMsImV4cCI6MTYwNzAyMjY0M30.i8M58Iu5HLuzDGj0-aElzPhilaoSKG3Ma9eTqn3kpd4",
                }),
                method: "POST",
                body: JSON.stringify(toSend)
            })
            if(res.ok){
               this.props.onNewComment(await res.json())
            }
       
        }

    render() {
        return (
            <>
        <FormControl value={this.state.rate} 
        type="number"
        onChange={(e)=>this.setState({rate: e.currentTarget.value})}></FormControl>
        <FormControl value={this.state.comment} 
        onChange={(e)=>this.setState({comment: e.currentTarget.value})}></FormControl>
        <Button onClick={this.sendComment} className="submit">+</Button> 
            </>
        )
    }
};

export default CommentCreator;