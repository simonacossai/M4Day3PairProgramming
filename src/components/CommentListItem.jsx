import React from 'react';
import { Col, Card, Button, FormControl } from "react-bootstrap";
import './CommentListItem.css';

class CommentListItem extends React.Component {

        state = {
           isEditing: false,
           rate:0,
           comment: "",
        };
        deleteComment=async()=>{
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.comment._id,{
                headers: new Headers({
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2YzMzMzk4MzViMDAwMTc1ODRmYTciLCJpYXQiOjE2MDU4MTMwNDMsImV4cCI6MTYwNzAyMjY0M30.i8M58Iu5HLuzDGj0-aElzPhilaoSKG3Ma9eTqn3kpd4",
                }),
                method: "DELETE",
            })
            if(res.ok){
               this.props.onDeleteComment(this.props.comment._id)
            }
        }
        editComment =()=>{
            this.setState({
                isEditing: !this.state.isEditing
            })
        }
        updateComment=async()=>{
            const toSend= {
                rate: this.state.rate,
                comment: this.state.comment,
                elementId: this.props.comment._id,
            }
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+ this.props.comment._id,{
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2YzMzMzk4MzViMDAwMTc1ODRmYTciLCJpYXQiOjE2MDU4MTMwNDMsImV4cCI6MTYwNzAyMjY0M30.i8M58Iu5HLuzDGj0-aElzPhilaoSKG3Ma9eTqn3kpd4",
                }),
                method: "PUT",
                body: JSON.stringify(toSend)
            })
            if(res.ok){
                this.setState({
                    isEditing: false
                })
               this.props.updateComment(await res.json())
            }
        }


    render() {
        return (
            <li>
            {this.state.isEditing ? 
                <>
                <FormControl value={this.state.rate} 
                type="number"
                onChange={(e)=>this.setState({rate: e.currentTarget.value})}></FormControl>
                <FormControl value={this.state.comment} 
                onChange={(e)=>this.setState({comment: e.currentTarget.value})}></FormControl>
                <Button variant="primary" onClick={this.updateComment} className="submit">submit</Button>
                </>              
                :
                <>
                {this.props.comment.rate} -> {this.props.comment.comment} 
              </>
            }
            <Button variant="secondary" onClick={this.editComment} className="edit">edit</Button>
            <Button variant="danger" onClick={this.deleteComment} className="delete">x</Button>
         </li>

           
        )
    }
};

export default CommentListItem;