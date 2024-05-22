import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import ProjectCardContainer from "@/components/project/project_card_container";
import Cursor from "@/components/ui/cursor";

const Project = () => {
    return (
        <div className="px-[5%] relative overflow-hidden  w-full space-y-5" id="project">
            <SectionTitle label="Project"/>
            <h2 className="text-white text-4xl pb-20">
                Explore my work, discover my projects, and get inspired.
            </h2>
            <ProjectCardContainer/>
            <div className="h-[10px]">
                <Cursor/>
            </div>
        </div>
    );
};

export default Project;