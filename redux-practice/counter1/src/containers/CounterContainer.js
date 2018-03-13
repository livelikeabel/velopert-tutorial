import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

//store안의 state값을 props로 연결해준다.
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

// 액션 생성자를 사용하여 액션을 생성하고, 해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor(); //임시
        dispatch(actions.setColor(color));
    }
});

//Counter 컴포넌트의 Container 컴포넌트
//Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;
