"use client";
import React from "react";
import {CardBody, CardContainer} from "@/components/skills/skills_card";
import {skills} from "@/utils/skills_data";
import SkillsCardContent from "@/components/skills/skills_card_content";


export function CardSkillsContainer() {
    return (
        <CardContainer >
            <CardBody className="relative group/card hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-black dark:to-black/95 border-gray-200 dark:border-white/20 hover:border-blue-500/60 dark:hover:border-blue-500/40 w-[100%] mm:w-[100%] h-auto rounded-2xl p-8 md:p-10 border backdrop-blur-sm transition-all duration-500">
                {
                    skills.map((elem,key)=>(
                        <SkillsCardContent elem={elem} key={key}/>
                    ))
                }
            </CardBody>
        </CardContainer>
    );
}