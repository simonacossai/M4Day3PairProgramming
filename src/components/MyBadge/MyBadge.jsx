import React from 'react';
import {Badge } from "react-bootstrap";


const MyBadge = (props) => {
    return  <Badge variant={props.colour}>{props.text}</Badge>
}

export default MyBadge;