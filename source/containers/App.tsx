import * as React from 'react'
import {Connect} from "../store/index";
import {fetchUsers, addUser} from "../actions/users";

@Connect(
    (state) => ({users: state.users}),
    (dispatch) => ({
        refresh : () => dispatch(fetchUsers()),
        create : (id, name) => dispatch(addUser(id, name))
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
                    <button onClick={() => this.props.create(2, 'ADmin')}>Add</button>
                </div>
                {this.props.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
                {this.props.children}
            </div>
        );
    }

}