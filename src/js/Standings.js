import React, { Component } from "react";

import axios from "axios";

class Standings extends Component {
    state = {
        response: []
    }

    componentDidMount() {
        axios.get("https://us-central1-ftpfantasy-f75a6.cloudfunctions.net/api/test")
            .then(res => {
                const response = res.data;
                this.setState({response});
            })
    }

    render() {
        return(
            <div>
                <h1> Current FTP Standings </h1>
                <h2> Response from server:</h2>
                <p>{this.state.response}</p>

                <h2> UNDER CONSTRUCTION </h2>
            </div>
        );
    }
}

export default Standings;