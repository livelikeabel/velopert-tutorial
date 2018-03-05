import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            //state.number를 바꾼것이 아니라, 새로운 객체를 만들었다.
            //spread operator를 사용한여 복사한다. number는 덮어 씌워진다.
            return {
                ...state,
                number: state.number + 1,
                dumbObject: { ...state.dumbObject, u: 0 }
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}
