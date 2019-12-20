import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducer';
import RootSagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
export default function configureStore(initialState) {
  const store = createStore(RootReducer, initialState,applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(RootSagas);
  return store;
}