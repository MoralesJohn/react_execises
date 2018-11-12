import React from "react";
import Child from "./Child.js";
import "./Bubble.css";
let user = {first_name: "Brandon", last_name: "Shabazz"};
class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = user;
    }
    updateUser = (key, value) => {
        
        this.setState({
            [key]: value
        })
    };
    render() {
        return (
            <div className = "row parent">
                <h1>This is the parent</h1>
                <h3>First Name: {this.state.first_name} | Last Name: {this.state.last_name}</h3>
                <div className = "col-sm-6 col-xs-6">
                    <Child user={this.state} updateUser={this.updateUser}/>
                </div>
                <div className="col-sm-6 col-xs-6">
                    <Child user={this.state} updateUser={this.updateUser}/>
                </div>
                <div className="col-sm-6 col-xs-6">
                    <Child user={this.state} updateUser={this.updateUser}/>
                </div>
            </div>
        )
    }
}

export default Parent;