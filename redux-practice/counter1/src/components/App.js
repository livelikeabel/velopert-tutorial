import React, { Component } from 'react';
import Counter from './Counter';
import CounterContainer from '../containers/CounterContainer';
import Buttons from './Buttons';

class App extends Component {
    render() {
        return (
            <div>
                <Buttons />
                <CounterContainer/>
            </div>
        );
    }
}

export default App;
