import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from 'redux';

import { ideasReducers } from './ideas';

export const reducers = combineReducers({
    ideas: ideasReducers
});

export const configureStore = () => {
    const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
    return store;
}