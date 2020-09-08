import React, {useState, useEffect} from 'react'
import Details from './details.js'

const UpdateDetails = () => {
    const [name, setName] = useState("")

    const [age, setAge] = useState("")

    const [click, setClick] = useState(0)

    const increase = () => {
        setClick(prevClick => prevClick + 1);
    
    }

    
        
    
    return(
        <div>
            
            
            <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
            <input value={age} onChange={e => setAge(e.target.value)} placeholder="age" />

            <button type="submit" onClick={()=>console.log(name,age)} onClick={(setName, setAge, increase)}>Submit</button>
            
            
            
            <Details name={name} age={age}/>
                     

            <p>Number of Clicks: {click}</p>


        </div>
    )
}


export default UpdateDetails