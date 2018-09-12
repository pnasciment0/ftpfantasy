import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <h1>FTP Fantasy</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/lm-notes">LM Notes</a>
                    <a href="/managers">Managers</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;