import React, {Component} from "react";

import {
    HashRouter,
    Link
} from "react-router-dom";

class ManagerPage extends Component {
    render() {
        let name = this.props.match.params.name;
        return(
            <div>
                <div>
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