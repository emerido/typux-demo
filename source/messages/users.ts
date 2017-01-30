import {Action} from "typux";

@Action('USER_CREATE')
export class CreateUser
{

    constructor(public id: number, public name: string) {
    }

}

@Action('USER_DELETE')
export class DeleteUser
{

    constructor(public id : number) {
    }

}