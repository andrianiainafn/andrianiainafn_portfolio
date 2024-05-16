import React from 'react';
import ProjectTech from "@/components/project/project_tech";
import ProjectExternalLink from "@/components/project/project_external_link";
import {IProject} from "@/type/project_type";

interface Props{
    project:IProject
    even: boolean
}

const ProjectDescription = (props:Props) => {
    const {project,even} = props
    return (
        <div className={`flex  flex-col space-y-4 w-[40%] justify-start ${even ? '' : 'items-end'}`}>
            <h5 className=" text-blue-500">
                {project.type}
            </h5>
            <h3 className="text-2xl">
                {project.title}
            </h3>
            <div className={`absolute w-[50%] flex flex-col top-[20%] space-y-5  bg-opacity-25 ${even ? '' : 'items-end'}`}>
                <div className="bg-[#304336d9] p-2">
                    <p className="opacity-50 ">
                        {project.description}
                    </p>
                </div>
                <div className="flex items-center space-x-4 flex-wrap">
                    {
                        project.tech.map((elem,key)=>(
                            <ProjectTech elem={elem} key={key}/>
                        ))
                    }
                </div>
                <ProjectExternalLink githubLink={project.githubLink} demoLink={project.demoLink}/>
            </div>
        </div>
    );
};

export default ProjectDescription;