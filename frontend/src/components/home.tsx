import Base from './base'
import { useEffect, useState } from 'react'

const Home = () => {
    const [count,setCount] = useState(0)
    useEffect(() => {
        setCount((prev) => prev + 1);
    }, [])
    return (
        <div>
            <Base />
            <p>hello from home</p>
            <p>rendering : {count}</p>
            
        </div>
    )

}

export default Home