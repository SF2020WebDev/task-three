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
    
    return(
        <div>
            <Details name={setName} age={setAge}/>
            
            <button onClick={Increase}>Submit</button>
            <p borderStyle="solid" borderColor="black">Name: {name}</p>
            <p borderStyle="solid" borderColor="black">Age: {age}</p>
            <p>Number of Clicks: {click}</p>
        </div>
    )
}


export default UpdateDetails