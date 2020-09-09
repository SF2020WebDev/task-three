import React, { useState } from 'react'


const Details = (props) => {


    const [bold, setBold] = useState(false)
    return(
        <div >
            <p style={{width:"200px", borderStyle:"dashed", fontWeight: bold ? 'bold' : 'normal'}}>Name: {props.name} </p>
            <p style={{width:100, textAlign:"center", borderStyle:"dashed"}}>Age: {props.age} </p>

            <button onClick={()=> setBold(true)}>Make me bold!</button>
            
        </div>
    )
}

export default Details