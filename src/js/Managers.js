import React, { Component } from "react";
import Bio from "../js/Bio.js";
import '../css/Managers.css';
import managerData from '../assets/data/managers.json';

class Managers extends Component {
    render() {
        let arr = [];
        managerData.managers.forEach(function(man) {
           arr.push(man);
        });
        return(
            <div>
                <h1> Who Are We? </h1>
                <p> FTP Fantasy is made up of a colorful cast of characters from all walks of life (lol even when we're on our own site I still aggressively abuse alliteration). From cloud-burning Italian gingers to Filipino tryhards, we have both the best and worst the human race has to offer (respectively). Click on any of the bio images below to read more about each of our members. </p>
                <div className="bios-wrapper">
                    {arr.map(item => <Bio key={item.name} name={item.name} teamName = {item.teamName}/>)}
                </div>
            </div>
        );
    }
}

export default Managers;