import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootreducer';
import createSagaMiddleware from "redux-saga";
import Sagas from "./Sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Sagas);

export {store,sagaMiddleware}