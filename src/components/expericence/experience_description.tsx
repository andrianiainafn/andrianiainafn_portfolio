import React from 'react';
import Image from "next/image";
import {IExperience} from "@/type/experience_type";
import {ITech} from "@/type/skills_type";
import {useLanguage} from "@/components/ui/language-provider";

interface Props{
    description:IExperience
    experienceIndex: number
}

const ExperienceDescription = (props:Props) => {
    const { t } = useLanguage();
    const { description, experienceIndex } = props;
    
    const getExperienceDescriptions = () => {
        // Map experienceIndex to the correct translation key
        // expIndex 0 -> exp1, expIndex 1 -> exp2, expIndex 2 -> exp3, expIndex 3 -> exp4, expIndex 4 -> exp5
        const expMap: Record<number, keyof typeof t.experience.descriptions> = {
            0: "exp1",
            1: "exp2",
            2: "exp3",
            3: "exp4",
            4: "exp5"
        };
        const expKey = expMap[experienceIndex] || `exp${experienceIndex + 1}` as keyof typeof t.experience.descriptions;
        return t.experience.descriptions[expKey] || description.descriptions;
    }
    
    return (
        <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-4">
                {
                    getExperienceDescriptions().map((elem:string,key:number)=>(
                        <div key={key} className="flex items-start space-x-3">
                            <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"/>
                            <p className="text-gray-700 dark:text-white/80 leading-relaxed text-base md:text-lg">{elem}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                {
                    description.tech.map((elem:ITech,key:number )=>(
                    <div key={key} className="flex items-center space-x-2 bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 px-3 py-2 rounded-lg transition-all duration-300">
                        <Image height={20}
                        width={20}
                        className="rounded-md"
                        alt={elem.label} src={`/${elem.image}`}/>
                        <p className="text-sm text-gray-700 dark:text-white/70 font-medium">{elem.label}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ExperienceDescription;