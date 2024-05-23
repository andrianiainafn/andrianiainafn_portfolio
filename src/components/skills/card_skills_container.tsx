"use client";
import React from "react";
import {CardBody, CardContainer} from "@/components/skills/skills_card";
import {skills} from "@/utils/skills_data";
import SkillsCardContent from "@/components/skills/skills_card_content";


export function CardSkillsContainer() {
    return (
        <CardContainer >
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[100%] mm:w-[100%]  h-auto rounded-xl p-6 border  ">
                {
                    skills.map((elem,key)=>(
                        <SkillsCardContent elem={elem} key={key}/>
                    ))
                }

                {/*<div className="flex justify-between items-center mt-20">*/}
                {/*    <CardItem*/}
                {/*        translateZ={20}*/}
                {/*        as={Link}*/}
                {/*        href="https://twitter.com/mannupaaji"*/}
                {/*        target="__blank"*/}
                {/*        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"*/}
                {/*    >*/}
                {/*        contact me →*/}
                {/*    </CardItem>*/}
                {/*    <CardItem*/}
                {/*        translateZ={20}*/}
                {/*        as="button"*/}
                {/*        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"*/}
                {/*    >*/}
                {/*        Hire me*/}
                {/*    </CardItem>*/}
                {/*</div>*/}
            </CardBody>
        </CardContainer>
    );
}