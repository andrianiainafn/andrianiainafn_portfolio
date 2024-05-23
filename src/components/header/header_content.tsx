import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ActionButton from "@/components/ui/action_button";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import {TextGenerateEffectHero} from "@/components/header/hero_description";
import { motion } from 'framer-motion'

const HeaderContent = () => {
    return (
        <BackgroundGradientAnimation className="hidden mm:block" containerClassName="hidden mm:block">
            <div className="absolute z-50 inset-0 flex items-center m-auto justify-around text-white font-bold  pointer-events-none ">
                <motion.div
                    transition={{
                        duration: 0.5
                    }}
                    initial={{
                        y:100,
                        opacity: 0
                    }}
                    whileInView={{
                        y:0,
                        opacity: 1
                    }}
                    viewport={{once:true}}
                >
                    <Image className="" src="/afn.png" alt="imag of me" width={500} height={100}/>
                </motion.div>
                <div className="text-start flex w-[40%] flex-col space-y-6">
                    <motion.h2
                        transition={{
                            duration: 0.6,
                            delay:0.4
                        }}
                        initial={{
                            y:150,
                            opacity: 0
                        }}
                        whileInView={{
                            y:0,
                            opacity: 1
                        }}
                        viewport={{once:true}}
                        className="text-blue-500  text-2xl">
                        👋 Hello there, I&apos;m Nomena Andrianiaina
                    </motion.h2>
                    <motion.h1
                        transition={{
                            duration: 0.8,
                            delay:0.8
                        }}
                        initial={{
                            y:100,
                            opacity: 0
                        }}
                        whileInView={{
                            y:0,
                            opacity: 1
                        }}
                        viewport={{once:true}}
                        className="text-2xl  md:text-2xl lg:text-5xl">
                        Fullstack web & Mobile Developer
                    </motion.h1>
                    <motion.div
                        transition={{
                            duration: 1,
                            delay:0.12
                        }}
                        initial={{
                            y:100,
                            opacity: 0
                        }}
                        whileInView={{
                            y:0,
                            opacity: 1
                        }}
                        viewport={{once:true}}
                    >
                        <TextGenerateEffectHero/>
                    </motion.div>
                    <motion.div
                        transition={{
                            duration: 1,
                            delay:0.16
                        }}
                        initial={{
                            y:180,
                            opacity: 0
                        }}
                        whileInView={{
                            y:0,
                            opacity: 1
                        }}
                        viewport={{once:true}}
                        className="flex  items-center space-x-3 but pointer-events-auto ">
                        <Link href="https://github.com/andrianiainafn" target="_blank">
                            <ActionButton label="Github" icon={<FaGithub/>}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/andrianiaina-fanomezantsoa-nomena-09b3a8267" target="_blank">
                            <ActionButton label="Linkedin" icon={<FaLinkedin/>}/>
                        </Link>
                    </motion.div>
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