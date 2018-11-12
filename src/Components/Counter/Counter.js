import React from "react";
import "./Counter.css";

class Counter extends React.Component{
    constructor(props){
        super(props);
        if (this.props.name == null) {
            this.name = "Bob";
        } else {
            this.name = this.props.name;
        }
        this.state = {counter: 0};
        this.buttonState = "btn-primary";
    }
    incrementCount = () => {
        let cnt = this.state.counter;
        //if (cnt % 5 == 4){
            //this.buttonState = "btn btn-danger";
        //} else {
            //this.buttonState = "btn btn-primary";
        //}
        this.setState((state, props) => {
            return { counter: state.counter+1 };
        })
    }
    componentWillUpdate(nextProps, nextState){
        if (nextState.counter % 5 == 0 && this.state.counter != nextState.counter){
            this.buttonState = "btn btn-danger";
        } else {
            this.buttonState = "btn btn-primary";
        }
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.name}!</h1>
                <h3>{this.state.counter}</h3>
                <button className = {this.buttonState} onClick = {this.incrementCount} > Click me! </button>
            </div>
        )
    }
}

export default Counter;