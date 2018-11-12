import React from "react";
class Event extends React.Component{
    constructor(props){
        super(props);
        this.name = "Jude Crowley";

    }
    handleClick(){
        alert("Hello," + this.name);

    }
    render(){
        return(
            <div>
                <h1>Hello, this is the Event Component</h1>
                <button onClick = {() => this.handleClick()}>Click Me</button>
            </div>

        )
    }
}

export default Event;