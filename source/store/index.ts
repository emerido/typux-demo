import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createConnect, typuxMiddleware} from "typux-redux";
import {IState} from "./model";
import {users} from "../reducers/users";
import {reduxHttpMiddleware} from "typux-http";


const logger = store => next => action => {
    console.log('Dispatch', action);
    next(action);
};


export const store = createStore<IState>(
    combineReducers<IState>({
        users : users
    }),
    applyMiddleware(
        typuxMiddleware(),
        reduxHttpMiddleware(),
        logger
    )
);


export const Connect = createConnect<IState>();