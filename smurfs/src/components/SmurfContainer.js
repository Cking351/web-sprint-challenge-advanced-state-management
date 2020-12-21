import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';
import SmurfForm from './SmurfForm';

// context API
export const SmurfContext = createContext();

const SmurfContainer = () => {

    const [smurf, setSmurf] = useState([])

    // This gets smurfs
    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            setSmurf(response.data)
        })
        .catch(error => {
            console.log("You done smurfed up now", error)
        })
    })

        // this posts smurfs
    const addSmurf = smurf => {
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {})
        .catch(error => {console.log("You cant just make smurfs..", error)})
    }

    

    return (
        <SmurfContext.Provider value={{ smurf, setSmurf, addSmurf }}>
        <div>
            <SmurfCard />
            <SmurfForm />
        </div>
        </SmurfContext.Provider>
    )
}

export default SmurfContainer