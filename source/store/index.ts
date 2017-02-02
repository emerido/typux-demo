import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createConnect, typuxMiddleware} from "typux-redux";
import {IState} from "./model";
import {users} from "../reducers/users";
import {typuxHttpMiddleware} from "typux-http/lib";


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
        typuxHttpMiddleware(),
        logger
    )
);



store.subscribe(() => {
    console.log(store.getState());
});

export const Connect = createConnect<IState>();