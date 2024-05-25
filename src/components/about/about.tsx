import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';
import { FaArrowRightLong } from "react-icons/fa6";
import SectionTitle from "@/components/ui/section_title";
// import gsap from 'gsap-trial';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';;

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
        <div id="about" ref={container} className="w-full px-[5%] flex flex-col space-y-7 relative text-white  bg-black">
            <SectionTitle label="About"/>
            <div className="flex relative flex-col big:space-y-6 space-y-3 mm:space-y-0 mm:flex-row justify-between w-full">
                <div className="flex big:space-y-6 flex-col space-y-3 w-full mm:w-[50%]">
                    <h4 className="text-2xl above  md:text-4xl lg:text-5xl big:text-6xl">
                        I am able to deliver results that exceed your expectations
                    {/*    <span className="relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-blue-500 to-[#304336d9] dark:from-blue-500 dark:to-[#304336d9]">    */}
                    {/*</span>*/}
                    </h4>
                    <div>
                        <button  className="flex above cursor-pointer items-center big:text-2xl  space-x-2  border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full">
                            <span>Hire me now</span>
                            <FaArrowRightLong/>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                        </button>
                    </div>
                    <div className="box-c opacity-60 absolute top-5 flex items-center space-x-1 transform text-blue-500   rotate-90 " data-speed="0.5">
                        <span>Scroll</span>
                        <FaArrowRightLong/>
                    </div>
                </div>
                <div className="w-full mm:w-[40%] relative flex flex-col space-y-3">
                    <div className="box box-b absolute top-[25%] left-[50%] opacity-60 transform text-blue-500 py-10  -rotate-45 " data-speed="0.8  ">
                        problem-solver
                    </div>
                    <div className="box box-a absolute opacity-60 bottom-[10%] right-[10%] animate-second text-blue-500 transform rotate-45 gradient-blue" data-speed="1.5">
                        Innovative
                    </div>
                    <p className="text-justify above big:text-2xl" >
                        Hello! I&apos;m Nomena Andrianiaina, currently a student at the National School of Computer Science.
                        Passionate about the world of technology, I take great pleasure in solving problems with easy-to-use mobile or web applications.
                        I love collaborating with other developers to design and develop innovative solutions.
                        Always eager to learn and improve, I am aware that the world of computer science evolves every day.
                        And as they say, &apos;learning is my source code&apos;!
                        Outside of coding, you can find me searching for the latest tech meme online or exploring new cafes to fuel my passion for coffee and code. Join me in this adventure where creativity and technology meet!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;