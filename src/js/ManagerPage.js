import React, {Component} from "react";
import '../css/ManagerPage.css'
import managerData from '../assets/data/managers.json'

import {
    HashRouter,
    Link
} from "react-router-dom";

class ManagerPage extends Component {
    render() {
        let name = this.props.match.params.name;
        let properName = name.split("-").join(" ");
        let data = managerData.managers.find(function(entry) {
            return toUrlCase(entry.name) === name;
        });
        return(
            <div>
                <h1 className="proper-name">
                    {properName}
                </h1>
                <div className="main-wrapper">
                    <div className="di-wrapper">
                        <img className="bio-pic manager-page-pic" src={require(`../assets/profPics/${name.toLowerCase().replace(" ", "-")}.jpg`)} alt={name}/>
                        <div className="disable-imagus"></div>
                        <div className="caption">{data.picCaption}</div>
                    </div>
                    <div className="body-wrapper">
                        <div className="category">Manager Name:</div>
                        <div className="cat-value">{data.name}</div>
                        <div className="category">Team Name:</div>
                        <div className="cat-value">{data.teamName}</div>
                        <div className="category">Number of Seasons in League:</div>
                        <div className="cat-value">{data.upcomingSeasonNo + getYearSuffix(data.upcomingSeasonNo)}</div>
                        <div className="category">Hails from:</div>
                        <div className="cat-value">{data.location}</div>
                        <div className="category">Bio:</div>
                        <div className="cat-value">{data.bio}</div>
                    </div>
                </div>
                <HashRouter>
                    <div className="back-link-wrapper">
                        <Link to="/managers">Back to all managers</Link>
                    </div>
                </HashRouter>
            </div>

        )
    }
}

function toUrlCase (str) {
    return str.toLowerCase().split(" ").join("-");
}

function getYearSuffix(num) {
    switch (num) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

export default ManagerPage;