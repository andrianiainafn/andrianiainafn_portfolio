import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import ProjectCardContainer from "@/components/project/project_card_container";
import Cursor from "@/components/ui/cursor";
import {useLanguage} from "@/components/ui/language-provider";

const Project = () => {
    const { t } = useLanguage();
    return (
        <section className="px-[5%] py-20 md:py-32 relative overflow-hidden w-full space-y-12 bg-white dark:bg-black transition-colors duration-300 scroll-mt-20" id="project">
            <SectionTitle label={t.projects.title}/>
            <h2 className="text-gray-900 dark:text-white text-2xl vm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl leading-tight pb-4">
                {t.projects.subtitle}
            </h2>
            <ProjectCardContainer/>
            <div className="h-[10px]">
                <Cursor/>
            </div>
        </section>
    );
};

export default Project;