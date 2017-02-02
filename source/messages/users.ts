import {Action} from "typux";
import {Delete, Post, HttpParam, HttpOptionPlace} from "typux-http";

export class User
{

    @HttpParam(HttpOptionPlace.Body)
    public email : string;

    constructor(email: string) {
        this.email = email;
    }
}

@Post('/api/users')
@Action('USER_CREATE')
export class CreateUser extends User
{

    @HttpParam(HttpOptionPlace.Query)
    public id: number;

    @HttpParam(HttpOptionPlace.Body)
    public name: string;

    constructor(id: number, name: string, email : string) {
        super(email);
        this.id = id;
        this.name = name;
    }

}

@Delete('/api/users/{id}')
@Action('USER_DELETE')
export class DeleteUser
{

    constructor(public id : number) {
    }

}