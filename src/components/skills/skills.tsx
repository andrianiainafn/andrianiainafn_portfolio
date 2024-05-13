import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import {CardSkillsContainer} from "@/components/skills/card_skills_container";
import {skills} from "@/utils/skills_data";
import {ISkills} from "@/type/skills_type";

const Skills = () => {
    return (
        <div className=" px-[5%] flex flex-col py-[5%] space-y-5 text-white" id="skills">
            <SectionTitle label="Skills"/>
            <div className="flex justify-center w-full">
                <CardSkillsContainer />
            </div>
        </div>
    );
};

export default Skills;