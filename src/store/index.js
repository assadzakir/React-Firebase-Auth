import { createStore,applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import * as authEpics from '../store/epic/auth'


import TodoListReducer from './reducers/todoReducer';

export const rootReducer = combineReducers({
    TodoListReducer
// more reducers go here
});



const rootEpic = combineEpics(
    authEpics.registerEpic,
    authEpics.loginEpic,
    authEpics.logoutEpic

);

const epicMiddleware = createEpicMiddleware(rootEpic);


let store = createStore(rootReducer,applyMiddleware(epicMiddleware));

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
