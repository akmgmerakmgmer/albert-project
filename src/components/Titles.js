import React,{Component} from 'react'
const Titles=({id,span,h2})=>{
    return(
        <div className="titles" id={id}>
            <span className="color-change">{span}</span>
            <h2>{h2}</h2>
        </div>
    )
}
export default Titles