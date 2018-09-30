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
                    <Bio name="Thomas Anzalone" teamName="Long Island Legion"/>
                    <Bio name="Henry Mancao" teamName="Broward Builders"/>
                    <Bio name="UK Musa" teamName="Windy City Jayhawks"/>
                    <Bio name="Bryan Petti" teamName="Hogtown Flyboys"/>
                    <Bio name="Andrew Rubio" teamName="South Florida Storm"/>
                    <Bio name="Neil Seth" teamName="Utah Polygamists"/>
                    <Bio name="Aqib Shah" teamName="Aventura Aardvarks"/>
                    <Bio name="Anirudh Neti" teamName="Butters Bottom Bitches"/>
                    <Bio name="Rohan Batra" teamName="West Coast Soyboys"/>
                </div>
            </div>
        );
    }
}

export default Managers;