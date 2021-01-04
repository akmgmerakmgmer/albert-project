import React,{Component} from 'react'

const Main3=({services,progresses})=>{
    const servicesProgress=progresses.map(progress=>{
        return(
            <div>
                <div className="progress-text">
                    <span>{progress.span1}</span>
                    <span>{progress.span2}</span>
                </div>
                <div class="progress">
                    <div class={progress.class} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
        
    })
    const servicesList=services.map(service=>{
        return(
            <div className="col-xl-6 col-lg-12">
                <div className="main3-content">
                    <i class={service.class} aria-hidden="true"></i>
                    <h5>{service.h5}</h5>
                    <p>{service.p}</p>
                </div>
            </div>
        )
    })
    return(
        <div className="main3">
            <div className="row">
                {servicesList}
            </div>
            <div className="row main3-division2">
                <div className="col-xl-6 col-lg-12">
                    <p className="p1">In a <span className="color-change">short time</span>, I have been able to achieve excellence in all areas of app and web development.</p>
                    <p className="p2">I provide cost-effective and high quality products to meet our Clients’ needs of timely delivery World Wide. I want to be local in a global world to be where our Customers need our services customers need our services.</p>
                </div>
                <div className="col-xl-6 col-lg-12 progress-content">
                    {servicesProgress}
                </div>
            </div>
        </div>
    )
}
export default Main3