import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
