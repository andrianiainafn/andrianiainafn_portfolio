"use client"
import React, {useEffect} from 'react';
import Image from "next/image";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger)

const Header = () => {
    useEffect(() => {
        const textWrapper = document.querySelector(".your-text-wrapper-class")
        console.log(textWrapper)
        const pinTrigger = ScrollTrigger.create({
            trigger:".content-wrapper",
            pin:true,
            start:"top top",
            end:"+=200%",
        })

        let tl= gsap.timeline()
        tl.to(textWrapper,{
            x: "-200%",
            scrollTrigger:{
                start: ()=> pinTrigger?.start,
                end:()=> pinTrigger?.end,
                scrub:1,
            }
        })
        return ()=>{
            pinTrigger?.kill()
            tl.kill()
        }
    }, []);
    return (
        <>
            <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center px-40 justify-center text-white font-bold  pointer-events-none ">
                    <Image className="" src="/afn.png" alt="imag of me" width={500} height={100}/>
                    <div className="text-start flex flex-col space-y-6">
                        <h2 className="text-blue-500  text-2xl">
                            👋 Hello there, I&apos;m Nomena Andrianiaina
                        </h2>
                        <h1 className="text-2xl  md:text-3xl lg:text-7xl">
                            Fullstack & Mobile Developer
                        </h1>
                        <div className="flex  items-center space-x-3 but pointer-events-auto ">
                            <Link href="https://github.com/andrianiainafn" target="_blank">
                                <button  className="flex cursor-pointer items-center space-x-2  border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                                    <FaGithub/>
                                    <span>Github</span>
                                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                                </button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/andrianiaina-fanomezantsoa-nomena-09b3a8267" target="_blank">
                                <button className="flex  items-center space-x-2 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                                    <FaLinkedin/>
                                    <span>Linkedin</span>
                                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute space-x-2 dark:text-white  left-1 top-[50%] flex items-center ">
                    <p>
                        Reside in
                    </p>
                    <Image src="/madag.png" alt="mada" width={30} height={30}/>
                </div>
            </BackgroundGradientAnimation>
            <div className="content-wrapper bg-black">
                <div className="your-text-wrapper-class  flex justify-center items-center h-screen">
                    <h1 className="text-[6.4em] font-bold whitespace-nowrap text-white text-wrapper transform translate-x-[70%] ">
                        Spinning web wonders with a sprinkle of tech fairy dust!
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Header;