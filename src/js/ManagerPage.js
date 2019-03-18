import React, {Component} from "react";
import '../css/ManagerPage.css'

import {
    HashRouter,
    Link
} from "react-router-dom";

class ManagerPage extends Component {
    render() {
        let name = this.props.match.params.name;
        let properName = name.split("-").join(" ");
        return(
            <div>
                <div className="main-wrapper">
                    <h1 className="proper-name">
                        {properName}
                    </h1>
                    This is {name}
                   <div class="di-wrapper">
                        <img className="bio-pic manager-page-pic" src={require(`../assets/profPics/${name.toLowerCase().replace(" ", "-")}.jpg`)} alt={name}/>
                        <div class="disable-imagus"></div>
                   </div>
                </div>
                <HashRouter>
                    <div class="back-link-wrapper">
                        <Link to="/managers">Back to all managers</Link>
                    </div>
                </HashRouter>
            </div>

        )
    }
}

export default ManagerPage;