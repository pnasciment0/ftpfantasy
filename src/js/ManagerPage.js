import React, {Component} from "react";
import '../css/ManagerPage.css'

import {
    HashRouter,
    Link
} from "react-router-dom";

class ManagerPage extends Component {
    render() {
        let name = this.props.match.params.name;
        let properName = name.split("-").join(" ");
        return(
            <div>
                <div className="main-wrapper">
                    <h1 className="proper-name">
                        {properName}
                    </h1>
                    This is {name}
                </div>
                <HashRouter>
                    <div>
                        <Link to="/managers">Back to all managers</Link>
                    </div>
                </HashRouter>
            </div>

        )
    }

}

export default ManagerPage;