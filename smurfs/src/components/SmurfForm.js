import React, { useState, useContext } from 'react';
import {SmurfContext} from './SmurfContainer';
import { Button } from 'reactstrap'
import '../smurf.css'

const SmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const { addSmurf } = useContext(SmurfContext)

    const changeHandler = event => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = () => {
        addSmurf(newSmurf)
        document.getElementById("smurf-form").reset();
    }

    // this will clear form after POST
    const clearForm = () => {
        document.getElementById("smurf-form").reset();
    }

    return(
        <div>
            <form id="smurf-form" onChange={event => changeHandler(event)} onSubmit={event => submitHandler(event)}>
            <input 
            type='text'
            name='name'
            placeholder='name'
            value={newSmurf.name}
            // onChange={event => changeHandler(event)}
            />
            <input 
            type='text'
            name='age'
            placeholder='age'
            value={newSmurf.age}
            // onChange={event => changeHandler(event)}
            />
            <input 
            type='text'
            name='height'
            placeholder='height'
            value={newSmurf.height}
            // onChange={event => changeHandler(event)}
            />
            </form>
            <br></br>
            <Button class='my-btn' color='primary' onClick={event => submitHandler(event)}>The Smurf Stork</Button>
        </div>
    )
}

export default SmurfForm