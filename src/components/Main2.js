import React,{Component} from 'react'
import person2 from '../images/person2.jpg'

const Main2=({infos})=>{
    const infoList = infos.map(info=>{
        return(
            <div className="col-xl-4 col-lg-6">
                <i className={info.icon} aria-hidden="true"></i>
                <span>{info.value}</span>
            </div>
        )
    })
    return(
        <div className="main2">
            <div>
                <h5>I'm Albert Walkers and I'm a <span className="color-change">Front End Developer</span></h5>
                <p>Hi! My name is <span className="color-change">Albert Walkers.</span> I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                <div className="row">
                    {infoList}
                </div>
                <div className="buttons">
                    <button className="background-color button">Download Cv</button>
                    <button className="background-color button">Send Message</button>
                </div>         
            </div>
        </div>
    )
}

export default Main2