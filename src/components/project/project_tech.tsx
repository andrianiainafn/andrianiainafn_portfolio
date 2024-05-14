import React from 'react';
import Image from "next/image";
import {ITech} from "@/type/skills_type";

interface Props{
    elem:ITech
}

const ProjectTech = (props:Props) => {
    const {elem} = props
    return (
        <div className="flex items-center space-x-2">
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
                alt={elem.label}
            />
        </div>
    );
};

export default ProjectTech;