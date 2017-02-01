import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createConnect, typuxMiddleware} from "typux-redux";
import {IState} from "./model";
import {users} from "../reducers/users";
import {typuxHttpMiddleware} from "typux-http/lib";

export const store = createStore<IState>(
    combineReducers<IState>({
        users : users
    }),
    applyMiddleware(
        typuxMiddleware(),
        typuxHttpMiddleware()
    )
);

store.subscribe(() => {
    console.log(store.getState());
});

export const Connect = createConnect<IState>();