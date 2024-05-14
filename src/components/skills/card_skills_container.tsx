"use client";

import Image from "next/image";
import React from "react";
import {CardBody, CardContainer, CardItem} from "@/components/skills/skills_card";
import { ITech} from "@/type/skills_type";
import {skills} from "@/utils/skills_data";
import SkillsCardContent from "@/components/skills/skills_card_content";


export function CardSkillsContainer() {
    return (
        <CardContainer className="w-80%">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[80%] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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