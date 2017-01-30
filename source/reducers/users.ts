import {createReducer} from "typux-redux";
import {IMember} from "../store/model";
import {CreateUser} from "../messages/users";


export const users = createReducer<IMember[]>()
    .on(CreateUser, (state, data) => (
        [...state, {id : data.id, name : data.name}]
    ))
    .initial([
        {
            id : 1,
            name : 'Alex'
        },
        {
            id : 99,
            name : 'God'
        }
    ])
    .reducer()
;