import {ITech} from "@/type/skills_type";

export interface IProject{
    type:string
    title:string
    description: string
    tech:ITech[]
    githubLink:string
    demoLink:string
    image:string
}