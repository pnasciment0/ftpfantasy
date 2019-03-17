import React, {Component} from "react";
import '../css/ManagerPage.css'

import {
    HashRouter,
    Link
} from "react-router-dom";

class TeamPage extends Component {
    render() {
        let teamName = this.props.match.params.teamName;
        let properName = teamName.split("-").join(" ");
        return(
            <div>
                <div className="main-wrapper">
                    <h1 className="proper-name">
                        {properName}
                    </h1>
                    This is {teamName}
                </div>
                <HashRouter>
                    <div>
                        <Link to="/teams">Back to all teams</Link>
                    </div>
                </HashRouter>
            </div>

        )
    }

}

export default TeamPage;