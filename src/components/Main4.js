import React,{Component} from 'react'
const Main4 = ({images , vimo , all , youtube , pics})=>{
    const ImageList=images.map(image=>{
        return(
            <div className={image.class}>
                <img src={image.pic}/>
            </div>
        )
    })
    return(
        <div className="main4">
            <div>
                <ul>
                    <li className="all-word active" onClick={all}>All</li>
                    <li className="vimo-word" onClick={vimo}>Sample 1</li>
                    <li className="youtube-word" onClick={youtube}>Sample 2</li>
                    <li className="images-word" onClick={pics}>Sample 3</li>
                </ul>
            </div>
            <div className="row main4-images">
                {ImageList}
            </div>
        </div>
    )
}
export default Main4