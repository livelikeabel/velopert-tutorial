import { call, spawn, put, takeEvery } from "redux-saga/effects";
import * as actions from '../actions';
import axios from 'axios';

function* fetchBoardsSaga() {
  //try catch finally 구문으로 오류 제어가 가능하다
  try {
    //이 부분을 call 메소드를 이용해 test가 쉽게 바꿀 수 있다. (next 명령어를 사용할 수 있으므로)
    const { data } = yield axios.get('/boards');
    yield put(actions.fetchBoardsFulfilled(data));
  } catch (error) {
    yield put(actions.fetchBoardsRejected(error.response));
  }
}

function* watchBoard() {
  // type의 action이 실행되면 fetchBoardsSaga도 항상 실행한다.
  yield takeEvery(FETCH_BOARDS, fetchBoardsSaga);
}

//모든 listener(watcher)를 하나로 묶어준다. rootReducer에 묶어주는 그것과 같다고 보면 된다.
export default function* root() {
  yield spawn(watchBoard);
}
