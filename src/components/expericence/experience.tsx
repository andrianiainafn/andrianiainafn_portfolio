import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import {ExperienceContainer} from "@/components/expericence/expericence_container";

const Experience = () => {
    return (
        <div  className="w-full px-[5%] flex flex-col space-y-4 relative text-white  bg-black">
            <SectionTitle label="Experiences"/>
            <ExperienceContainer/>
        </div>
    );
};

export default Experience;