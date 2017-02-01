import {Action} from "typux";
import {Http, HttpMethod} from "typux-http/lib";

@Http('/api/users', HttpMethod.POST)
@Action('USER_CREATE')
export class CreateUser
{

    constructor(public id: number, public name: string) {
    }

}

@Http('/api/users/{id}', HttpMethod.DELETE)
@Action('USER_DELETE')
export class DeleteUser
{

    constructor(public id : number) {
    }

}