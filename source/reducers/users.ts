import {createReducer} from "typux-redux";
import {IMember} from "../store/model";
import {AddUser} from "../messages/users";


export const users = createReducer<IMember[]>()
    .on('FETCH_USERS', x => (
        x
    ))
    .on(AddUser, (state, data) => (
        [...state, {id : data.id, name : data.name}]
    ))
    .initial([
        {
            id : 1,
            name : 'alex'
        }
    ])
    .reducer()
;