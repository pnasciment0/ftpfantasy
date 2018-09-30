import React, { Component } from 'react';
import ManagerPage from "../js/ManagerPage.js";

import {
    HashRouter,
    Link
} from "react-router-dom";

class Bio extends Component {
    render() {
        let name = this.props.name;
        let teamName = this.props.teamName;
        let urlName = name.toLowerCase().split(" ").join("-");
        let url = `/managers/${urlName}`;
        return(
            <div className="bio">
                <div className="name-wrapper">
                    <div className="name">{name}</div>
                    <div>{teamName}</div>
                </div>
                {/*<div className="di-wrapper">*/}
                    {/*<img className="bio-pic" src={require("../assets/" + name.toLowerCase().split(" ").join("-") + ".jpg")} alt={name}/>*/}
                    {/*<div className="disable-imagus"></div>*/}
                {/*</div>*/}
                <HashRouter>
                    <div>
                        <Link to={url}><img className="bio-pic" src={require("../assets/" + name.toLowerCase().split(" ").join("-") + ".jpg")} alt={name}/></Link>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default Bio;