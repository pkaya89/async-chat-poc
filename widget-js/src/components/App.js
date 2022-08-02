import React, { Component } from 'react';
import Widget from './ChatWidget';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Async Chat JS</h1>
                <Widget/>
            </div>
        )
    }
}

export default App;