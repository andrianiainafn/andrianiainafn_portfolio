import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import ProjectCardContainer from "@/components/project/project_card_container";

const Project = () => {
    return (
        <div className="px-[5%] space-y-20" id="project">
            <SectionTitle label="Project"/>
            <ProjectCardContainer/>
        </div>
    );
};

export default Project;