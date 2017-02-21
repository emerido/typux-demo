/**
 * Root level of state
 */
export interface IState
{
    users : IMember[];
}

/**
 * Users interface
 */
export interface IMember
{

    id : number;

    name : string;

}