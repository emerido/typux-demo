import {Action} from "typux";

@Action('ADD_USER')
export class AddUser
{

    id : number;

    name : string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}