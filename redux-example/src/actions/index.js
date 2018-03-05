// ActionType에서 export const blabla를 불러오려면 아래처럼 해야한다.(export default와는 다름)
//import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes';

import * as types from './ActionTypes'; //이렇게 해도 된다.

//action 생성자도 다른 곳 에서 불러올 수 있게 export해준다.
export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}
