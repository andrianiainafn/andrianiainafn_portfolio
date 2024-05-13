"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {CardBody, CardContainer, CardItem} from "@/components/skills/skills_card";
import {ISkills, ITech} from "@/type/skills_type";
import {skills} from "@/utils/skills_data";

interface Props{
    skills:ISkills
}

export function CardSkillsContainer() {
    return (
        <CardContainer className="w-80%">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80%] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                {
                    skills.map((elem,key)=>(
                        <>
                            <CardItem
                                translateZ="50"
                                className="text-xl mt-5 mb-5 text-blue-500 font-bold "
                            >
                                {elem.title}
                            </CardItem>
                            {/*<CardItem*/}
                            {/*    as="p"*/}
                            {/*    translateZ="60"*/}
                            {/*    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"*/}
                            {/*>*/}
                            {/*    Hover over this card to unleash the power of CSS perspective*/}
                            {/*</CardItem>*/}
                            <div className="grid grid-cols-3 gap-2" >
                                {
                                    elem.tech.map((elem:ITech,key:number)=>(
                                        <CardItem translateZ="100" key={key} className=" flex items-center space-x-2 ">
                                            <h2 className="">
                                                {
                                                    elem.label
                                                }
                                            </h2>
                                            <Image
                                                src={`/${elem.image}`}
                                                height={40}
                                                width={40}
                                                className="   rounded-xl group-hover/card:shadow-xl"
                                                alt="thumbnail"
                                            />
                                        </CardItem>
                                    ))
                                }
                            </div>
                        </>
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