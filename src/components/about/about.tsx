import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';
import { FaArrowRightLong } from "react-icons/fa6";
import SectionTitle from "@/components/ui/section_title";
import {useLanguage} from "@/components/ui/language-provider";
// import gsap from 'gsap-trial';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';;

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t } = useLanguage();
    const container = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: '.box-c',
                pin: true,
                start: 'center center',
                end: '+=300',
                markers: false,
            });
        },
        {
            scope: container,
        }
    );
    return (
        <section id="about" ref={container} className="w-full px-[5%] py-20 md:py-32 flex flex-col space-y-12 relative text-gray-900 dark:text-white bg-white dark:bg-black transition-colors duration-300 scroll-mt-20">
            <SectionTitle label={t.about.title}/>
            <div className="flex relative flex-col big:space-y-8 space-y-8 mm:space-y-0 mm:flex-row justify-between w-full gap-8 mm:gap-12">
                <div className="flex big:space-y-8 flex-col space-y-6 w-full mm:w-[50%]">
                    <h4 className="text-2xl vm:text-3xl above md:text-4xl lg:text-5xl big:text-6xl font-semibold leading-tight">
                        {t.about.heading}
                    </h4>
                    <div className="pt-2">
                        <a href="#contact" className="group inline-flex above cursor-pointer items-center big:text-xl space-x-3 border text-sm font-medium relative border-gray-300 dark:border-white/20 hover:border-blue-500/60 text-gray-900 dark:text-white px-6 py-3 rounded-full bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                            <span>{t.about.cta}</span>
                            <FaArrowRightLong className="transform group-hover:translate-x-1 transition-transform duration-300"/>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                    <div className="box-c opacity-40 absolute top-10 flex items-center space-x-1 transform text-blue-500 rotate-90 text-xs" data-speed="0.5">
                        <span>{t.about.scroll}</span>
                        <FaArrowRightLong/>
                    </div>
                </div>
                <div className="w-full mm:w-[45%] relative flex flex-col">
                    <div className="relative bg-gradient-to-br from-gray-100/80 to-gray-50/80 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-500/10 dark:shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-shadow duration-300">
                        <div className="box box-b absolute -top-10 -left-10 opacity-30 transform text-blue-500 py-10 -rotate-45 text-sm" data-speed="0.8">
                            problem-solver
                        </div>
                        <div className="box box-a absolute -bottom-10 -right-10 opacity-30 animate-second text-blue-500 transform rotate-45 text-sm" data-speed="1.5">
                            Innovative
                        </div>
                        <p className="text-justify above big:text-xl text-gray-700 dark:text-white/80 leading-relaxed relative z-10">
                            {t.about.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;