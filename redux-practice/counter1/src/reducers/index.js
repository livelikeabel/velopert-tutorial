import * as types from '../actions/ActionTypes';

// 초기상태정의
const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

//리듀서 함수 정의
function counter(state = initialState, action) {
    //레퍼런스 생성 / state.counters 를 자주 사용해야하므로, 이를 줄여서 사용하여 코드를 줄이기 위해 상단에 레퍼런스를 만들어서 사용하면 코드가 더 깔끔해집니다.
    const { counters } = state;

    switch(action.type) {
        //카운터를 새로 추가합니다.
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        // slice 를 이용하여 맨 마지막 카운터를 제외시킨다.
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length -1)
            };

        // action.index 번째 카운터의 number에 1을 더합니다.
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        // action.index 번쨰 카운터의 number에 1을 뺍니다.
        case types.DECREMENT:
            return {
                counters : [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        //action.index 번째 카운터의 색상을 변경
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default:
            return state;
    }
};

export default counter
