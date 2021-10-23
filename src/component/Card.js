import { render } from "@testing-library/react";

import React, { Component } from "react";

class Card extends Component{
    render(){
        this.state = {
            images:["picture","nature"]
        }        
    return(
        <div className="card">
            <img src = "https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg"/>
            <img src = "https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg"/>
            <h2>{this.state.images.map((item)=>{
            return <> {item}<hr/> </>
            
            })}</h2>
        </div>
    )
}
}
export default Card;