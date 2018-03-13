import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black'
};

//리듀서는 state와 action을 받는 순수함수이다.
const color = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_COLOR:
            return {
                color: action.color
            };
        default:
            return state;
    }
}

export default color;
