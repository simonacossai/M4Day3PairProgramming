import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'

class ReservationForm extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            comment: {
                comment: "A good book but definitely I don't like many parts of the plot",
                rate: 3,
                elementId: this.props.id,
            },  
        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== prevState) {
          console.log("ciaoooooooooo", prevState.comment.elementId);

        } else {
            console.log("non è cambiato un cazzo",prevProps.elementId)
        }
      };
    
    updateReservationField = (e) => {
        let comment = { ...this.state.comment } 
        let currentId = e.currentTarget.id 
        comment[currentId] = e.currentTarget.value
        this.setState({ comment: comment })
    }

    submitReservation = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' ,
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comment),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2YzMzMzk4MzViMDAwMTc1ODRmYTciLCJpYXQiOjE2MDU4MTMwNDMsImV4cCI6MTYwNzAyMjY0M30.i8M58Iu5HLuzDGj0-aElzPhilaoSKG3Ma9eTqn3kpd4",
                    })
                })
            if (response.ok) {
                alert('comment published!')
                this.setState({
                    comment: {
                        comment: '',
                        rate: 1,
                        elementId: '',
                    },
                
                })
            } else {
                console.log(this.state.comment);
                console.log('an error occurred')               
            }
        } catch (e) {
            console.log(e) // Error
        }
    }

    render() {
        return (
            <div>
                
                <Form className="w-100 mb-5" onSubmit={this.submitReservation}>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="comment" onClick={()=>console.log(this.state.comment.elementId)}>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="comment"
                                    id="comment"
                                    placeholder="Your comment"
                                    value={this.state.comment.comment}
                                    onChange={this.updateReservationField}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group>
                                <Form.Label htmlFor="rate">
                                    How much would you rate it?
                            </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="rate"
                                    id="rate"
                                    value={this.state.comment.rate}
                                    onChange={this.updateReservationField}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                     
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ReservationForm