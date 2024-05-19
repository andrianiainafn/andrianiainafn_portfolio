import React from 'react';
import {IProject} from "@/type/project_type";
import Image from "next/image";
import ProjectTech from "@/components/project/project_tech";
import ProjectExternalLink from "@/components/project/project_external_link";
import ProjectDescription from "@/components/project/project_description";
import {number} from "prop-types";
import {BorderBeam} from "@/components/ui/border_animate";

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
                    <div className=" flex w-full  relative justify-between text-white">
                        <ProjectDescription project={project} even={true}/>
                        <div className="relative w-[60%] overflow-hidden rounded-lg">
                            <Image className="rounded-lg" src={`/${project.image}`} alt={project.title} width={800} height={600}/>
                            <BorderBeam size={250} duration={12} delay={9} />
                        </div>
                    </div>

                ):(
                    < div className=" flex w-full relative justify-between text-white">
                        <div className="relative rounded-lg overflow-hidden w-[60%]">
                            <Image className="rounded-lg" src={`/${project.image}`} alt={project.title} width={800} height={600}/>
                            <BorderBeam size={250} duration={12} delay={9} />
                        </div>
                        <ProjectDescription project={project} even={false}/>
                    </div>
                )
            }
        </>
    );
};

export default ProjectCardItem;