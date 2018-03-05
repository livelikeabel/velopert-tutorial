import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';

import * as actions from '../actions';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }

        return(
            <div style={style}>
              <Value number={this.props.number}/>
              <Control
                  onPlus={this.props.handleIncrement}
                  onSubtract={this.props.handleDecrement}
                  onRandomizeColor={this.setRandomColor}
              />
            </div>
        );
    }
}


//아래의 state는 redux의 state를 의미한다.
//객체를 return하고, 어떠한 props가 state에 어떠한 값으로 연결 될 지 정한다.
//이렇게 return하면 state안에 있던 값들이 이 컴포넌트의 number props와 color props로 연결되는 것이다.
const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}

// dispatch를 파라미터로 받는다. action을 dispatch하는 함수를 props로 연결해 준다.
const mapDispatchToProps = (dispatch) => {
    return {
        //props의 내용은 함수인데, 함수 안에서 action을 dispatch한다
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    }
}
//counter 컴포넌트를 redux에 연결한다. connect함수를 사용한다.
//connect는 component를 redux에 연결하는 또다른 함수를 반환 한다.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
