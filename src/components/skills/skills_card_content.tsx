import React from 'react';
import {CardItem} from "@/components/skills/skills_card";
import {ISkills, ITech} from "@/type/skills_type";
import Image from "next/image";

interface Props{
    elem:ISkills
}

const SkillsCardContent = (props:Props) => {
    const {elem}= props
    return (
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
            <div  className="grid grid-cols-2 vm:grid-cols-3 gap-2" >
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
    );
};

export default SkillsCardContent;