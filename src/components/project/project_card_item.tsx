import React from 'react';
import {IProject} from "@/type/project_type";
import Image from "next/image";
import ProjectDescription from "@/components/project/project_description";
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
                    <div className=" flex w-full border border-white/[0.2] p-2 tm:p-0 tm:border-none rounded-lg tm:rounded-none  relative space-y-3 tm:space-y-0 flex-col-reverse tm:flex-row tm:justify-between text-white">
                        <ProjectDescription project={project} even={true}/>
                        <div className="relative w-full tm:w-[60%]  overflow-hidden rounded-lg">
                            <Image className="rounded-lg w-full" src={`/${project.image}`} alt={project.title} width={800} height={600}/>
                            <BorderBeam size={250} duration={12} delay={9} />
                        </div>
                    </div>

                ):(
                    < div className=" flex w-full border border-white/[0.2] p-2 tm:p-0 tm:border-none relative flex-col space-y-3 tm:space-y-0 rounded-lg tm:rounded-none  tm:flex-row  tm:justify-between text-white">
                        <div className="relative rounded-lg  overflow-hidde w-full tm:w-[60%] ">
                            <Image className="rounded-lg w-full" src={`/${project.image}`} alt={project.title} width={800} height={600}/>
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