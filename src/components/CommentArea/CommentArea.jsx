import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'

class ReservationForm extends React.Component {
    state = {
        reservation: {
            comment: "A good book but definitely I don't like many parts of the plot",
            rate: 3,
            elementId: ""
        },
        errMessage: '',
        loading: false
    }

    updateReservationField = (e) => {
        let reservation = { ...this.state.reservation } 
        let currentId = e.currentTarget.id
        if (currentId === 'smoking') {
            reservation[currentId] = e.currentTarget.checked
        } else {
            reservation[currentId] = e.currentTarget.value 
        }
        this.setState({ reservation: reservation })
    }

    submitReservation = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        try {
            let response = await fetch('https://striveschool.herokuapp.com/api/reservation',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.reservation),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2YzMzMzk4MzViMDAwMTc1ODRmYTciLCJpYXQiOjE2MDU4MTMwNDMsImV4cCI6MTYwNzAyMjY0M30.i8M58Iu5HLuzDGj0-aElzPhilaoSKG3Ma9eTqn3kpd4",
                    })
                })
            if (response.ok) {
                alert('Reservation saved!')
                this.setState({
                    reservation: {
                        name: '',
                        phone: '',
                        numberOfPersons: '1',
                        smoking: false,
                        dateTime: '',
                        specialRequests: ''
                    },
                    errMessage: '',
                    loading: false,
                })
            } else {
                console.log('an error occurred')
                let error = await response.json()
                this.setState({
                    errMessage: error.message,
                    loading: false,
                })
            }
        } catch (e) {
            console.log(e) // Error
            this.setState({
                errMessage: e.message,
                loading: false,
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.errMessage && (
                        <Alert variant="danger">
                            We encountered a problem with your request
                            {this.state.errMessage}
                        </Alert>
                    )
                }
                {
                    this.state.loading && (
                        <div className="d-flex justify-content-center my-5">
                            Reserving your table, please wait
                            <div className="ml-2">
                                <Spinner animation="border" variant="success" />
                            </div>
                        </div>
                    )
                }
                <Form className="w-100 mb-5" onSubmit={this.submitReservation}>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    value={this.state.reservation.name}
                                    onChange={this.updateReservationField}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="phone">Phone</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your phone"
                                    required
                                    value={this.state.reservation.phone}
                                    onChange={this.updateReservationField}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label htmlFor="numberOfPersons">
                                    How many people?
                            </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="numberOfPersons"
                                    id="numberOfPersons"
                                    value={this.state.reservation.numberOfPersons}
                                    onChange={this.updateReservationField}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2} className="flex flex-column align-self-end">
                            <Form.Group>
                                <Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        id="smoking"
                                        label="Smoking?"
                                        checked={this.state.reservation.smoking}
                                        onChange={this.updateReservationField}
                                    />
                                </Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label htmlFor="dateTime">Date and Time</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="dateTime"
                                    id="dateTime"
                                    placeholder="Date and Time"
                                    value={this.state.reservation.dateTime}
                                    onChange={this.updateReservationField}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="specialRequests">Special requests</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="specialRequests"
                                    id="specialRequests"
                                    placeholder="Your special requests"
                                    value={this.state.reservation.specialRequests}
                                    onChange={this.updateReservationField}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ReservationForm