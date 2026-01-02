import React from 'react';
import Image from "next/image";
import {ITech} from "@/type/skills_type";

interface Props{
    elem:ITech
}

const ProjectTech = (props:Props) => {
    const {elem} = props
    return (
        <div className="group flex items-center space-x-2 bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 rounded-lg px-3 py-2 transition-all duration-300 backdrop-blur-sm">
            <Image
                src={`/${elem.image}`}
                height={20}
                width={20}
                className="rounded-md"
                alt={elem.label}
            />
            <span className="text-sm text-gray-700 dark:text-white/80 group-hover:text-gray-900 dark:group-hover:text-white font-medium">
                {elem.label}
            </span>
        </div>
    );
};

export default ProjectTech;