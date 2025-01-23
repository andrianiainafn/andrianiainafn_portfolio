import Header from "@/components/header/header";
import React from "react";
import Incentive from "@/components/ui/incentive";
import About from "@/components/about/about";
import Project from "@/components/project/project";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import {OrbitingCirclesElement} from "@/components/header/orbiting_circle_element";
import Experience from "@/components/expericence/experience";

export const PageContent = () => {
    return (
        <div className="bg-black w-full space-y-20" >
            <Header/>
            <OrbitingCirclesElement/>
            <About/>
            <Skills/>
            <Incentive/>
            <Experience/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
};