import React, { Component } from 'react';
import './NavBar.css';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import LmNotes from "./LmNotes";

class NavBar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>FTP Fantasy</h1>
                    <nav>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/lm-notes">LM Notes</NavLink>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/lm-notes" component={LmNotes}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default NavBar;