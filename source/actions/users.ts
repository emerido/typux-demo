import {CreateUser, DeleteUser} from "../messages/users";

export const fetchUsers = () => ({
    type : 'FETCH_USERS'
});

export const createUser = (id : number, name : string) => (
    new CreateUser(id, name)
);

export const deleteUser = (id : number) => (
    new DeleteUser(id)
);