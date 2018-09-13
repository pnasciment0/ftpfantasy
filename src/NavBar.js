import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <h1>FTP Fantasy</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/lm-notes">LM Notes</a>
                    <a href="/managers">Managers</a>
                    <a href="/history">History</a>
                    <a href="/season">Season</a>
                    <a href="/finances">Finances</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;