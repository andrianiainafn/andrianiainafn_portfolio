import React from 'react';
import Link from "next/link";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {useLanguage} from "@/components/ui/language-provider";

interface Props{
    githubLink:string
    demoLink:string
}

const ProjectExternalLink = (props:Props) => {
    const { t } = useLanguage();
    const {githubLink,demoLink} = props
    return (
        <div className="flex items-center space-x-4 pt-2">
            <Link href={githubLink} target="_blank" className="group flex space-x-2 items-center text-gray-700 dark:text-white/70 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                <FaGithub size={18} className="transform group-hover:scale-110 transition-transform"/>
                <span className="text-sm font-medium underline decoration-gray-300 dark:decoration-white/30 group-hover:decoration-blue-500 dark:group-hover:decoration-blue-400 transition-colors">{t.projects.links.source}</span>
            </Link>
            <Link href={demoLink} target="_blank" className="group flex space-x-2 items-center text-gray-700 dark:text-white/70 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                <FaExternalLinkAlt size={18} className="transform group-hover:scale-110 transition-transform"/>
                <span className="text-sm font-medium underline decoration-gray-300 dark:decoration-white/30 group-hover:decoration-blue-500 dark:group-hover:decoration-blue-400 transition-colors">{t.projects.links.demo}</span>
            </Link>
        </div>
    );
};

export default ProjectExternalLink;