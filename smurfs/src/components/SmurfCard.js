import React, { useContext } from 'react';
import { SmurfContext } from './SmurfContainer'
import Smurfs from './Smurf';


const SmurfCard = () => {

    const {smurf} = useContext(SmurfContext)
    return(
        <div>
            {smurf.map(smurf => <Smurfs key={smurf.id} smurf={smurf} />)}
        </div>
    )
}

export default SmurfCard;