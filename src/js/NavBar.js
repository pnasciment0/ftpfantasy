import React, { Component } from 'react';
import '../css/NavBar.css';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "../js/Home";
import LmNotes from "../js/LmNotes";
import Managers from "../js/Managers";
import ManagerPage from "./ManagerPage";
import Teams from "../js/Teams";


class NavBar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>FTP Fantasy</h1>
                    <nav>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/teams">Teams</NavLink>
                        <NavLink to="/lm-notes">LM Notes</NavLink>
                        <NavLink to="/managers">Managers</NavLink>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/teams" component={Teams}/>
                        <Route path="/lm-notes" component={LmNotes}/>
                        <Route exact path="/managers" component={Managers}/>
                        <Route exact path="/managers/:name" component={ManagerPage}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default NavBar;