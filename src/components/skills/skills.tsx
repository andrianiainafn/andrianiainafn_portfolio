import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import {CardSkillsContainer} from "@/components/skills/card_skills_container";
import {skills} from "@/utils/skills_data";
import {ISkills} from "@/type/skills_type";
import {useLanguage} from "@/components/ui/language-provider";

const Skills = () => {
    const { t } = useLanguage();
    return (
        <section className="px-[5%] flex flex-col py-20 md:py-32 space-y-12 text-gray-900 dark:text-white bg-white dark:bg-black transition-colors duration-300 scroll-mt-20" id="skills">
            <SectionTitle label={t.skills.title}/>
            <div className="flex justify-center w-full">
                <CardSkillsContainer />
            </div>
        </section>
    );
};

export default Skills;