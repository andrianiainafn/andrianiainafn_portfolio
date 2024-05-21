import {ReactNode} from "react";

export interface IContact {
    label:string
    value:string
    icon:ReactNode
}
export interface IFormInput{
    name:string,
    email:string
    message:string
    phone:string
}