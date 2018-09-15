import React, { Component } from 'react';

class Bio extends Component {
    render() {
        let name = this.props.name;
        let teamName = this.props.teamName;
        return(
            <div className="bio">
                <div className="name">{name}</div>
                {/*<div>{teamName}</div>*/}
                <div className="di-wrapper">
                    <img className="bio-pic" src={require("../assets/" + name.toLowerCase().split(" ").join("-") + ".jpg")} alt={name}/>
                    <div className="disable-imagus"></div>
                </div>
            </div>
        )
    }
}

export default Bio;