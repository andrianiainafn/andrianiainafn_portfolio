import React from 'react';
import ProjectTech from "@/components/project/project_tech";
import ProjectExternalLink from "@/components/project/project_external_link";
import {IProject} from "@/type/project_type";
import {useLanguage} from "@/components/ui/language-provider";

interface Props{
    project:IProject
    even: boolean
}

const ProjectDescription = (props:Props) => {
    const { t } = useLanguage();
    const {project,even} = props
    
    const getProjectDescription = () => {
        switch(project.title) {
            case "GMI": return t.projects.descriptions.gmi;
            case "Dot Double Zero [.00]": return t.projects.descriptions.dotDoubleZero;
            case "Chaaat App": return t.projects.descriptions.chaaat;
            case "Miray App": return t.projects.descriptions.miray;
            case "Elita team website": return t.projects.descriptions.elita;
            default: return project.description;
        }
    }
    return (
        <div className={`flex above flex-col space-y-5 w-full tm:w-[40%] justify-center ${even ? '' : 'items-start tm:items-end'}`}>
            <div className="flex flex-col space-y-2">
                <span className="inline-block text-blue-500 text-xs font-semibold tracking-wider uppercase w-fit">
                    {project.type === "Personal project" ? t.projects.types.personal :
                     project.type === "Hackathon project" ? t.projects.types.hackathon :
                     project.type === "Team project" ? t.projects.types.team : project.type}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                </h3>
            </div>
            <div className={`w-full flex flex-col space-y-6 ${even ? '' : 'items-start tm:items-end'}`}>
                <div className="bg-gradient-to-br from-gray-100/80 to-gray-50/80 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-5 md:p-6 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10">
                    <p className="text-gray-700 dark:text-white/70 leading-relaxed text-sm md:text-base">
                        {getProjectDescription()}
                    </p>
                </div>
                <div className="flex items-center space-x-3 flex-wrap gap-3">
                    {
                        project.tech.map((elem,key)=>(
                            <ProjectTech elem={elem} key={key}/>
                        ))
                    }
                </div>
                <ProjectExternalLink githubLink={project.githubLink} demoLink={project.demoLink}/>
            </div>
        </div>
    );
};

export default ProjectDescription;