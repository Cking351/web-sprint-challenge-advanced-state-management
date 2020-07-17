import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';

// context API
export const SmurfContext = createContext();

const SmurfContainer = () => {

    const [smurf, setSmurf] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            setSmurf(response.data)
        })
        .catch(error => {
            console.log("You done smurfed up now", error)
        })
    })

    return (
        <SmurfContext.Provider value={{ smurf, setSmurf }}>
        <div>
            <h1>Hello</h1>
            {smurf.map((item) => (
                <SmurfCard />
            ))}
        </div>
        </SmurfContext.Provider>
    )
}

export default SmurfContainer