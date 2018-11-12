import React from "react";
import "./Prop.css";
class Prop extends React.Component{
    constructor(props){
        super(props);
        if (this.props.user != null){
            this.name = `${this.props.user.first_name} ${this.props.user.last_name}`
        }
    }
    render(){
        if (this.props.user != null) {
            return(
                <div>
                    <h1>Hello, {this.name}</h1>
                    <h3>{this.props.user.age}</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Nothing here</h3>
                </div>)
        }
    }
}

export default Prop;
