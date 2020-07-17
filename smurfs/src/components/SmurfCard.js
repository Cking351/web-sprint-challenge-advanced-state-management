import React, { useContext } from 'react';
import { SmurfContext } from './SmurfContainer'
import Smurfs from './Smurf';


const SmurfCard = () => {

    const {smurf} = useContext(SmurfContext)
    return(
        <div>
            <h1>It's a whole Smurf village</h1>
            {smurf.map(smurf => <Smurfs key={smurf.id} smurf={smurf} />)}
        </div>
    )
}

export default SmurfCard;