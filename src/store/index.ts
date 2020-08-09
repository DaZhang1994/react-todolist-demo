import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import todoSagas from './todo-sagas'

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(todoSagas);

export default store;
