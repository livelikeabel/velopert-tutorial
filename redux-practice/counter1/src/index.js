import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Redux 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';

// 스토어 생성
const store = createStore(reducers);

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
