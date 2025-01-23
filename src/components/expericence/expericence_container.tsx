"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";
import ExperienceDescription from "@/components/expericence/experience_description";
import {experiences} from "@/utils/experience_data";

export function ExperienceContainer() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={"text-xl mb-4"}>
                            {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                                {/*{item?.image && (*/}
                                {/*    <Image*/}
                                {/*        src={item.image}*/}
                                {/*        alt="blog thumbnail"*/}
                                {/*        height="1000"*/}
                                {/*        width="1000"*/}
                                {/*        className="rounded-lg mb-10 object-cover"*/}
                                {/*    />*/}
                                {/*)}*/}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "NextJs & React Native Developer",
        description: (
            <ExperienceDescription description={experiences[3]}/>
        ),
        badge: "Freelance | Nov 2024 - Now ",
        image: "/topr.png",
    },
    {
        title: "NextJs & React Native Developer",
        description: (
            <ExperienceDescription description={experiences[0]}/>
        ),
        badge: "Orange Madagascar | July - Nov 2024 ",
        image: "/mada-explore.jpg",
    },
    {
        title: "Flutter Developer",
        description: (
            <ExperienceDescription description={experiences[1]}/>
        ),
        badge: "Ecole Nationale d'Infomatique | May  - July 2024",
        image:
            "/poketra.png",
    },
    {
        title: "Fullstack Developer",
        description: (
            <ExperienceDescription description={experiences[2]}/>
        ),
        badge: "DGEP | Oct - Dec 2023 ",
        image:
            "/dashboard.png",
    },
];
