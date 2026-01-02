import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import {ExperienceContainer} from "@/components/expericence/expericence_container";
import {useLanguage} from "@/components/ui/language-provider";

const Experience = () => {
    const { t } = useLanguage();
    return (
        <section className="w-full px-[5%] py-20 md:py-32 flex flex-col space-y-12 relative text-gray-900 dark:text-white bg-white dark:bg-black transition-colors duration-300 scroll-mt-20">
            <SectionTitle label={t.experience.title}/>
            <ExperienceContainer/>
        </section>
    );
};

export default Experience;