import React from 'react';
import {projects} from "@/utils/project_data";
import ProjectCardItem from "@/components/project/project_card_item";

const ProjectCardContainer = () => {
    return (
        <div className="flex justify-center flex-col items-center space-y-20">
            {
                projects.map((elem,key)=>(
                    <ProjectCardItem key={key} project={elem} number={key}/>
                ))
            }
        </div>
    );
};

export default ProjectCardContainer;