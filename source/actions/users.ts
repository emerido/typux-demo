import {AddUser} from "../messages/users";

export const fetchUsers = () => ({
    type : 'FETCH_USERS'
});

export const addUser = (id : number, name : string) => new AddUser(id, name);