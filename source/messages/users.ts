import {Action} from "typux-redux";
import {HttpPost, HttpDelete, Query, Body} from "typux-http";

export class User
{

    @Body()
    public email : string;

    constructor(email: string) {
        this.email = email;
    }
}

@HttpPost('/api/users')
@Action('USER_CREATE')
export class CreateUser extends User
{

    @Query()
    public id: number;

    @Body()
    public name: string;

    constructor(id: number, name: string, email : string) {
        super(email);
        this.id = id;
        this.name = name;
    }

}

@HttpDelete('/api/users/{id}')
@Action('USER_DELETE')
export class DeleteUser
{

    constructor(public id : number) {
    }

}