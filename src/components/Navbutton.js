import React,{Component} from 'react'

const Navbutton=({nav})=>{
    return(
        <div class="wrapper" onClick={nav} >
            <div class="icon">
                <span class="line top"></span>
                <span class="line center"></span>
                <span class="line bottom"></span>
            </div>
        </div>
    )
}
export default Navbutton