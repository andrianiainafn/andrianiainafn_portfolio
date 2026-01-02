"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";
import ExperienceDescription from "@/components/expericence/experience_description";
import {experiences} from "@/utils/experience_data";

export function ExperienceContainer() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-3xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-12 group">
                        <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 border border-blue-500/40 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold w-fit px-4 py-1.5 mb-4 backdrop-blur-sm">
                            {item.badge}
                        </div>

                        <h3 className="text-xl md:text-2xl mb-6 font-semibold text-gray-900 dark:text-white">
                            {item.title}
                        </h3>

                        <div className="text-sm prose prose-sm dark:prose-invert">
                            <ExperienceDescription description={item.experience} experienceIndex={item.expIndex} />
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Fullstack Javascript Developer",
        experience: experiences[0],
        expIndex: 0,
        badge: "Freelance | Fev 2025 - Now ",
        image: "/webradio.png",
    },
    {
        title: "NextJs & React Native Developer",
        experience: experiences[4],
        expIndex: 4,
        badge: "Freelance | Nov 2024 - Fev 2025 ",
        image: "/topr.png",
    },
    {
        title: "NextJs & React Native Developer",
        experience: experiences[1],
        expIndex: 1,
        badge: "Orange Madagascar | July - Nov 2024 ",
        image: "/mada-explore.jpg",
    },
    {
        title: "Flutter Developer",
        experience: experiences[2],
        expIndex: 2,
        badge: "Ecole Nationale d'Infomatique | May  - July 2024",
        image:
            "/poketra.png",
    },
    {
        title: "Fullstack Developer",
        experience: experiences[3],
        expIndex: 3,
        badge: "DGEP | Oct - Dec 2023 ",
        image:
            "/dashboard.png",
    },
];
