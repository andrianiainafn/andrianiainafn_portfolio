import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ActionButton from "@/components/ui/action_button";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import {TextGenerateEffectHero} from "@/components/header/hero_description";

const HeaderContent = () => {
    return (
        <BackgroundGradientAnimation className="hidden mm:block" containerClassName="hidden mm:block">
            <div className="absolute z-50 inset-0 flex items-center m-auto justify-around text-white font-bold  pointer-events-none ">
                <Image className="" src="/afn.png" alt="imag of me" width={500} height={100}/>
                <div className="text-start flex w-[40%] flex-col space-y-6">
                    <h2 className="text-blue-500  text-2xl">
                        👋 Hello there, I&apos;m Nomena Andrianiaina
                    </h2>
                    <h1 className="text-2xl  md:text-2xl lg:text-5xl">
                        Fullstack web & Mobile Developer
                    </h1>
                    <TextGenerateEffectHero/>
                    <div className="flex  items-center space-x-3 but pointer-events-auto ">
                        <Link href="https://github.com/andrianiainafn" target="_blank">
                            <ActionButton label="Github" icon={<FaGithub/>}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/andrianiaina-fanomezantsoa-nomena-09b3a8267" target="_blank">
                            <ActionButton label="Linkedin" icon={<FaLinkedin/>}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute space-x-2 text-white  left-1 top-[50%] flex items-center ">
                <p>
                    Reside in
                </p>
                <Image src="/madag.png" alt="mada" width={30} height={30}/>
            </div>
        </BackgroundGradientAnimation>
    );
};

export default HeaderContent;