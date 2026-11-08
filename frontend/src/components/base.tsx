import { useState } from 'react'



const Base = () => {     
    const [counter, setCounter] = useState(0);         //counter is variable, setCounter is function used to update variable
    const [username, setUsername] = useState("Sameer");
    const [showpassword, setShowpassword] = useState(false)
    return (
        <div>
         <div>
            <p> Counter : {counter} </p>
            <button onClick={() => setCounter(counter + 1)}>Press</button>
            <button onClick={() => setCounter(0)}> Reset </button>
         </div>
         <div>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h1>Hello, {username}!</h1>
         </div>
         <div>
            <input type={showpassword ? "text" : "password"} />
            <button onClick={() => setShowpassword(!showpassword)}> Show/Hide</button>
         </div>
        </div> 
    )
}


export default Base