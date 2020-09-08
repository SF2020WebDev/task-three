import React, {useState, useEffect} from 'react'
import Details from './details.js'

const UpdateDetails = () => {
    const [name, setName] = useState("")
    useEffect(() => {
        console.log(name)
    }, [name]
    )

    const [age, setAge] = useState("")
    useEffect(() => {
        console.log(age)
    }, [age]
    )

    const [click, setClick] = useState(0)

    const Increase = () => {
        setClick(prevClick => prevClick + 1);
    
    }
    

    const [complete, setComplete] = useState(false)

    const [bold, setBold] = useState(false)
        
    
    return(
        <div>
            <Details name={setName} 
                     age={setAge} />
            
            <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
            <input value={age} onChange={e => setAge(e.target.value)} placeholder="age" />

            <button onClick={(setName, setAge, Increase, setComplete)}>Submit</button>
            
            {complete ? <p>Name: {name} </p> : null}
            {complete ? <p>Age: {age}</p> : null}
            <p>Number of Clicks: {click}</p>

            <button onClick={()=> setBold(true)}>Make me bold!</button>

            
            


        </div>
    )
}


export default UpdateDetails