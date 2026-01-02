import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ActionButton from "@/components/ui/action_button";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import {TextGenerateEffectHero} from "@/components/header/hero_description";
import { motion } from 'framer-motion'
import {useLanguage} from "@/components/ui/language-provider";

const HeaderContent = () => {
    const { t } = useLanguage();
    return (
        <BackgroundGradientAnimation className="hidden mm:block" containerClassName="hidden mm:block">
            <div className="absolute z-50 inset-0 flex items-center m-auto justify-around text-gray-900 dark:text-white font-bold pointer-events-none transition-colors duration-300">
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
                <div className="text-start flex w-[40%] flex-col space-y-6 md:space-y-8">
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
                        className="text-blue-600 dark:text-blue-500 text-xl md:text-2xl big:text-4xl font-medium">
                        👋 {t.header.greeting}
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
                        className="text-3xl md:text-4xl lg:text-5xl big:text-7xl font-semibold leading-tight">
                        {t.header.title}
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
            <div className="absolute space-x-2 text-gray-700 dark:text-white/80 left-4 md:left-6 top-[50%] flex items-center bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <p className="text-sm font-medium">
                    {t.header.resideIn}
                </p>
                <Image src="/madag.png" alt="mada" width={24} height={24} className="rounded-full"/>
            </div>
        </BackgroundGradientAnimation>
    );
};

export default HeaderContent;