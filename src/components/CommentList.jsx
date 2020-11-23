import React from 'react';
import { Col, Card, FormControl } from "react-bootstrap";
import CommentListItem from './CommentListItem';
import CommentCreator from './CommentCreator';
class CommentList extends React.Component {

        state = {
           commentFilter: ""
        };



    render() {
        return (
            <>
            <FormControl value={this.state.commentFilter} onChange={(e)=>this.setState({commentFilter: e.currentTarget.value.toLowerCase()})}></FormControl>
              <ul>
                  {this.props.comments && this.props.comments
                  .filter(comment=> comment.comment.toLowerCase().indexOf(this.state.commentFilter)!== -1)
                  .map(comment => <CommentListItem key={comment._id} comment={comment} onDeleteComment={this.props.onDeleteComment} updateComment={this.props.updateComment}/>)}
              </ul>  
            <CommentCreator bookId={this.props.bookId} onNewComment={this.props.onNewComment}  />
            </>
        )
    }

};

export default CommentList;