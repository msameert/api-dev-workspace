import { useState } from 'react'



const Base = () => {
    const[counter, setCounter] = useState(0);
    return (
        <div>
            <p> Counter : {counter} </p>
            <button onClick={() => setCounter(counter + 1)}>Press</button>
        </div>
        
    )
}


export default Base