import React, { useState, useContext } from 'react';
import {SmurfContext} from './SmurfContainer';

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
    }

    return(
        <div>
            <form onChange={event => changeHandler(event)} onSubmit={event => submitHandler(event)}>
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
            <button onClick={event => submitHandler(event)}>Smurf Stork</button>
        </div>
    )
}

export default SmurfForm