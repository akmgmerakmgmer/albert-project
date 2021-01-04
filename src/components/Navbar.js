import React,{Component} from 'react'
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'

const Navbar=({navs})=>{
    const NavList=navs.map(nav=>{
        return(
            <li><a href={nav.href}>{nav.name}</a></li>
              
        )
    })
    return(
        <section>
            <img className="logo2" src={logo2}/>
            <img className="logo1" src={logo}/>
            <nav>  
                <ul>
                    {NavList}
                </ul>
            </nav>
            <div className="icons">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-behance" aria-hidden="true"></i>
            </div>
        </section>
    )
}

export default Navbar