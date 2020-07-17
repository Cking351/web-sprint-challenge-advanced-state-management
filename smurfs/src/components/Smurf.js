import React from 'react';
import { Jumbotron } from 'reactstrap'

const Smurfs = props => {
    return (
        <Jumbotron>
        <h2>Name: {props.smurf.name}</h2>
        <h3>Age: {props.smurf.age}</h3>
        <h3>Height: {props.smurf.height}</h3>
        <br></br>
        </Jumbotron>
    )
}


export default Smurfs