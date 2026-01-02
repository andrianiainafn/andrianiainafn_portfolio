import React from 'react';
import Link from "next/link";
import ActionButton from "@/components/ui/action_button";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import {useLanguage} from "@/components/ui/language-provider";

const HeaderResponsiveContent = () => {
    const { t } = useLanguage();
    return (
        <BackgroundGradientAnimation size="60%" className="block mm:hidden" containerClassName="block mm:hidden" >
            <div className="absolute mm:hidden flex z-50 overflow-hidden inset-0 flex-col items-center m-auto text-gray-900 dark:text-white font-bold pointer-events-none ">
                <div className="text-start flex items-center m-auto flex-col space-y-6">
                    <h2 className="text-blue-600 dark:text-blue-500 text-center text-2xl">
                        👋 {t.header.greeting}
                    </h2>
                    <h1 className="text-2xl text-center md:text-2xl lg:text-5xl">
                        {t.header.title}
                    </h1>
                    <p className="text-gray-700 dark:text-white/75 text-center">
                        {t.header.description}
                    </p>
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
            {/*<div className="absolute space-x-2 text-white  left-1 top-[50%] flex items-center ">*/}
            {/*    <p>*/}
            {/*        Reside in*/}
            {/*    </p>*/}
            {/*    <Image src="/madag.png" alt="mada" width={30} height={30}/>*/}
            {/*</div>*/}
            </BackgroundGradientAnimation>
    );
};

export default HeaderResponsiveContent;