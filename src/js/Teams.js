import React, { Component } from "react";
import TeamBio from "../js/TeamBio.js";
import '../css/Teams.css';
import managerData from '../assets/data/managers.json';

class Teams extends Component {
    render() {
        let arr = [];
        managerData.managers.forEach(function(man) {
           arr.push(man);
        });
        return(
            <div>
                <h1> Whose Teams Is This?? </h1>
                <p> These are the teams. </p>
                <div className="bios-wrapper">
                    {arr.map(item => <TeamBio key={item.teamName} teamName = {item.teamName} name={item.name} />)}
                </div>
            </div>
        );
    }
}

export default Teams;