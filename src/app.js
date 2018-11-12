import React from "react";
import "react-router";
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'
import Prop from "./Components/Prop/Prop.js";
import Event from "./Components/Event/Event.js";
import State from "./Components/State/State.js";
import Parent from "./Components/Bubble/Parent.js";
import Counter from "./Components/Counter/Counter.js";

class App extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <BrowserRouter>
                <div>
                    {/* This is our Navigation Menu */}
                    <ul className="nav nav-pills" >
                        <li><Link to="/">State</Link></li>
                        <li><Link to="/prop">Prop</Link></li>
                        <li><Link to="/event">Event</Link></li>
                        <li><Link to="/bubble">Bubble</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        
                    </ul>
                    {/* This is how we define what components should render based off of the url */}
                    <Route exact path="/" component={State} />
                    <Route path="/prop" component={Prop} />
                    <Route path="/event" component={Event} />
                    <Route path="/bubble" component={Parent} />
                    <Route path="/counter" component={Counter} />
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default App;