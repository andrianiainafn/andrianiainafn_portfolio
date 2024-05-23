import React from 'react';
import Image from "next/image";
import {IExperience} from "@/type/experience_type";
import {ITech} from "@/type/skills_type";

interface Props{
    description:IExperience
}

const ExperienceDescription = (props:Props) => {
    return (
        <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-2">
                {
                    props.description.descriptions.map((elem:string,key:number)=>(
                        <div key={key} className="flex items-start space-x-2 text-xl">
                            <span className="h-3 mt-2 rounded-full w-4 bg-[#304336d9] opacity-80"/>
                            <p>{elem}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex">
                {
                    props.description.tech.map((elem:ITech,key:number )=>(
                    <div key={key} className="flex items-center space-x-2  p-2 rounded-lg    ">
                        <p>{elem.label}</p>
                        <Image height={25}
                        width={25}
                        className="rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail" src={`/${elem.image}`}/>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ExperienceDescription;