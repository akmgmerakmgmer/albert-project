import React from "react";

const Main6=()=>{
    return(
        <div className="main6">
            <div className="row">
                <div className="col-lg-6">
                    <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                    <form>
                        <input type="text" className="form-defaults" placeholder="Name"/><br/>
                        <input type="text" className="form-defaults" placeholder="Email"/><br/>
                        <textarea type="text" className="form-defaults" placeholder="Message"/><br/>
                        <input className="button background-color submit" type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Main6