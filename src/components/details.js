import React, { useState } from 'react'


const Details = (props) => {


    const [bold, setBold] = useState(false)
    return(
        <div >
            <p style={{borderStyle:"dashed"}}
                style={
                    bold ? {fontWeight:"bold"} : {fontWeight:"normal"} }>
                        {props.name} </p>
            <p style={{borderStyle:"dashed"}}>{props.age} </p>

            <button onClick={()=> setBold(true)}>Make me bold!</button>
            
        </div>
    )
}

export default Details