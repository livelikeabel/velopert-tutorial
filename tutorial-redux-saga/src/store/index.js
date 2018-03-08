import createSagaMiddleware, { END } from 'redux-saga';
const saga = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      (inDevelopment && window.devToolsExtension) ? window.devToolsExtension() : f => f
    )
  );

  store.runSaga = saga.run;
  store.close = () => store.dispatch(END);

  return store;
}
