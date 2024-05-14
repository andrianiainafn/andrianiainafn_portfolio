import React from 'react';
import Link from "next/link";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

interface Props{
    githubLink:string
    demoLink:string
}

const ProjectExternalLink = (props:Props) => {
    const {githubLink,demoLink} = props
    return (
        <div className="flex items-center space-x-3">
            <Link href={githubLink} target="_blank" className="flex space-x-2 items-center hover:text-blue-500">
                <span className="underline">Source</span>
                <FaGithub size={30}/>
            </Link>
            <Link href={demoLink} target="_blank" className="flex space-x-2 items-center hover:text-blue-500">
                <span className="underline">demo</span>
                <FaExternalLinkAlt size={30}/>
            </Link>
        </div>
    );
};

export default ProjectExternalLink;