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
                    <div className="group flex w-full relative space-y-6 tm:space-y-0 flex-col-reverse tm:flex-row tm:justify-between items-center gap-8 tm:gap-12 py-10 tm:py-16">
                        <ProjectDescription project={project} even={true}/>
                        <div className="relative w-full tm:w-[60%] overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10 group-hover:shadow-blue-500/40 dark:group-hover:shadow-blue-500/30 group-hover:border-blue-500/30 dark:group-hover:border-blue-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <Image className="rounded-2xl w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700" src={`/${project.image}`} alt={project.title} width={800} height={600}/>
                            <BorderBeam size={250} duration={12} delay={9} />
                        </div>
                    </div>

                ):(
                    <div className="group flex w-full relative flex-col space-y-6 tm:space-y-0 tm:flex-row tm:justify-between items-center gap-8 tm:gap-12 py-10 tm:py-16">
                        <div className="relative rounded-2xl overflow-hidden w-full tm:w-[60%] border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10 group-hover:shadow-blue-500/40 dark:group-hover:shadow-blue-500/30 group-hover:border-blue-500/30 dark:group-hover:border-blue-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <Image className="rounded-2xl w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700" src={`/${project.image}`} alt={project.title} width={800} height={600}/>
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