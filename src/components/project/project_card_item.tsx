import React from 'react';
import {IProject} from "@/type/project_type";
import Image from "next/image";
import ProjectTech from "@/components/project/project_tech";
import ProjectExternalLink from "@/components/project/project_external_link";
import ProjectDescription from "@/components/project/project_description";
import {number} from "prop-types";

interface Props{
    project:IProject
    number:number
}

const ProjectCardItem = (props:Props) => {
    const {project,number}=props
    return (
        <>
            {
                (number % 2) === 0 ? (
                    <div className=" flex w-full relative justify-between text-white">
                        <ProjectDescription project={project} even={true}/>
                        <div className="w-[60%]">
                            <Image src={`/${project.image}`} alt={project.title} width={800} height={600}/>
                        </div>
                    </div>

                ):(
                    < div className=" flex w-full relative justify-between text-white">
                        <div className="w-[60%]">
                            <Image src={`/${project.image}`} alt={project.title} width={800} height={600}/>
                        </div>
                        <ProjectDescription project={project} even={false}/>
                    </div>
                )
            }
        </>
    );
};

export default ProjectCardItem;