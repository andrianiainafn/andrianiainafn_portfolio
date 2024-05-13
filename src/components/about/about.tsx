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
        <div id="about" ref={container} className="container w-full z-40 p-[40px] flex flex-col space-y-4 relative h-screen text-white  bg-black">
            <SectionTitle label="About"/>
            <div className="flex justify-between w-full">
                <div className="flex flex-col space-y-3 w-[50%]">
                    <h4 className="text-2xl  md:text-5xl lg:text-7xl">
                        I am able to deliver results that exceed your expectations
                    </h4>
                    <div>
                        <button  className="flex cursor-pointer items-center  space-x-2  border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full">
                            <span>Hire me now</span>
                            <FaArrowRightLong/>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                        </button>
                    </div>
                    <div className="box box-a absolute top-[300px] right-[50px] text-blue-500 gradient-blue" data-speed="1.5">
                        Innovative
                    </div>
                    <div className="box-c z-10 flex items-center space-x-1 ransform text-blue-500 py-10  rotate-90 " data-speed="2.5">
                        <span>Scroll</span>
                        <FaArrowRightLong/>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col space-y-3">
                    <div className="box box-b transform text-blue-500 py-10  -rotate-45 " data-speed="0.8  ">
                        problem-solver
                    </div>
                    <p className="text-justify" >
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