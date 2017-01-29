import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createConnect, typuxMiddleware} from "typux-redux";
import {IState} from "./model";
import {users} from "../reducers/users";

export const store = createStore<IState>(
    combineReducers<IState>({
        users : users
    }),
    applyMiddleware(
        typuxMiddleware()
    )
);

store.subscribe(() => {
    console.log(store.getState());
});

export const Connect = createConnect<IState>();