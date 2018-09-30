import React, { Component } from 'react';

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
                    <Link to={url}><div className="name">{name}</div></Link>
                    <Link to={url}><div>{teamName}</div></Link>
                </div>
                {/*<div className="di-wrapper">*/}
                    {/*<img className="bio-pic" src={require("../assets/" + name.toLowerCase().split(" ").join("-") + ".jpg")} alt={name}/>*/}
                    {/*<div className="disable-imagus"></div>*/}
                {/*</div>*/}
                <HashRouter>
                    <div>
                        <Link to={url}>
                            {/*<img className="bio-pic" src={require("../assets/" + name.toLowerCase().split(" ").join("-") + ".jpg")} alt={name}/>*/}
                            <div className="di-wrapper">
                            <img className="bio-pic" src={require("../assets/" + name.toLowerCase().split(" ").join("-") + ".jpg")} alt={name}/>
                            <div className="disable-imagus"></div>
                            </div>
                        </Link>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default Bio;