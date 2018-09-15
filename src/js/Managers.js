import React, { Component } from "react";
import Bio from "../js/Bio.js";
import '../css/Managers.css'

class Managers extends Component {
    render() {
        return(
            <div>
                <h1> Who Are We? </h1>
                <p> FTP Fantasy is made up of a colorful cast of characters from all walks of life (lol even when we're on our own site I still abuse alliteration aggressively). From cloud-burning Italian gingers to Filipino tryhards, we have both the best and worst the human race has to offer (respectively). Click on any of the bio images below to read more about each of our members. </p>
                <div className="bios-wrapper">
                    <Bio name="Paulo Nascimento" teamName="Lake Michigan Stoners" />
                    <Bio name="Thomas Anzalone" teamName="Lake Michigan Stoners"/>
                    <Bio name="Henry Mancao" teamName="Lake Michigan Stoners"/>
                    <Bio name="UK Musa" teamName="Lake Michigan Stoners"/>
                    <Bio name="Bryan Petti" teamName="Lake Michigan Stoners"/>
                    <Bio name="Andrew Rubio" teamName="Lake Michigan Stoners"/>
                    <Bio name="Neil Seth" teamName="Lake Michigan Stoners"/>
                    <Bio name="Aqib Shah" teamName="Lake Michigan Stoners"/>
                    <Bio name="Anirudh Neti" teamName="Lake Michigan Stoners"/>
                    <Bio name="Rohan Batra" teamName="Lake Michigan Stoners"/>
                </div>
            </div>
        );
    }
}

export default Managers;