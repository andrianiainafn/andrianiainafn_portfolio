import React from 'react';
import {CardItem} from "@/components/skills/skills_card";
import {ISkills, ITech} from "@/type/skills_type";
import Image from "next/image";
import {useLanguage} from "@/components/ui/language-provider";

interface Props{
    elem:ISkills
}

const SkillsCardContent = (props:Props) => {
    const { t } = useLanguage();
    const {elem}= props
    
    const getSkillTitle = (title: string) => {
        switch(title) {
            case "Frontend": return t.skills.titles.frontend;
            case "Mobile": return t.skills.titles.mobile;
            case "Backend": return t.skills.titles.backend;
            case "Problem solving": return t.skills.titles.problemSolving;
            case "DataBases": return t.skills.titles.databases;
            case "Tools": return t.skills.titles.tools;
            default: return title;
        }
    }
    return (
        <>
            <CardItem
                      translateZ="50"
                      className="text-lg md:text-xl mt-6 mb-6 text-blue-500 font-semibold uppercase tracking-wide"
            >
                {getSkillTitle(elem.title)}
            </CardItem>
            <div className="grid grid-cols-2 vm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4" >
                {
                    elem.tech.map((elem:ITech,key:number)=>(
                        <CardItem 
                            translateZ="100" 
                            key={key} 
                            className="group/tech flex flex-col items-center justify-center space-y-2 bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 rounded-xl p-4 transition-all duration-300 backdrop-blur-sm"
                        >
                            <Image
                                src={`/${elem.image}`}
                                height={32}
                                width={32}
                                className="rounded-lg transition-transform duration-300 group-hover/tech:scale-110"
                                alt={elem.label}
                            />
                            <span className="text-xs text-gray-700 dark:text-white/70 group-hover/tech:text-gray-900 dark:group-hover/tech:text-white font-medium text-center">
                                {elem.label}
                            </span>
                        </CardItem>
                    ))
                }
            </div>
        </>
    );
};

export default SkillsCardContent;