import * as React from 'react'
import {Connect} from "../store/index";
import {fetchUsers, createUser, deleteUser} from "../actions/users";
import {attachAction} from "typux-redux";

@Connect(
    (state) => ({
        users: state.users
    }),
    (dispatch) => ({
        refresh : attachAction(dispatch, fetchUsers),
        remove : attachAction(dispatch, deleteUser),
        create : attachAction(dispatch, createUser)
    })
)
export class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button onClick={() => this.props.refresh()}>Refresh</button>
                    <button onClick={() => this.props.create(2, 'Admin')}>Add</button>
                    <button onClick={() => this.props.remove(2)}>Remove</button>
                </div>
                {this.props.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
                {this.props.children}
            </div>
        );
    }

}