import React,{Component} from 'react'
import person1 from '../images/person1.jpg'

const Main1=()=>{
    return(
        <div className="main1" id="home">
            <div className="main1-content">
                <img src={person1}/>
                <h3>Albert <span className="color-change">Walkers</span></h3>
                <p>I'm a Front End Developer</p>
            </div>
        </div>
    )
}
export default Main1