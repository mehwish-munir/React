import React, {Component} from "react"

class Header extends Component {
    render(){
        this.state = {
            name:"Mehwish",
            degree: "Fsc",
            skills:["HTML, " , "CSS, " , "JS, ", "MERN"]
        }

        return(
            <>
            <h2>
                My name is {this.state.name} 
            </h2>
            <h2>
                I have done my {this.state.degree} 
            </h2>
            <h2 className="skills">
                My Skills are {this.state.skills.map((item)=>{
                    return <>{item}<hr/></>
                })} 
            </h2>
            </>
        )
    }
}

export default Header;