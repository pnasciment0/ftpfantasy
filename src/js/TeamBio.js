import React, { Component } from 'react';

import {
    HashRouter,
    Link
} from "react-router-dom";

class TeamBio extends Component {
    render() {
        let name = this.props.name;
        let teamName = this.props.teamName;
        let urlName = teamName.toLowerCase().split(" ").join("-");
        let url = `/teams/${urlName}`;
        return(
            <div className="bio">
                <div className="name-wrapper">
                    <Link to={url}><div className="name">{teamName}</div></Link>
                    <Link to={url}><div>{name}</div></Link>
                </div>
                <HashRouter>
                    <div>
                        <Link to={url}>
                            <div className="di-wrapper">
                            <img className="bio-pic" src={require(`../assets/teamPics/lake-michigan-stoners.jpg`)} alt={teamName}/>
                            <div className="disable-imagus"></div>
                            </div>
                        </Link>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default TeamBio;