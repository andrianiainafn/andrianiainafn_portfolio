"use client"
import React, {useEffect} from 'react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";
import {useLanguage} from "@/components/ui/language-provider";


gsap.registerPlugin(ScrollTrigger);

const Incentive = () => {
    const { t } = useLanguage();
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
        <div className="content-wrapper bg-white dark:bg-black hidden md:block transition-colors duration-300">
            <div className="your-text-wrapper-class flex justify-center items-center h-screen">
                <h1 className="text-[6.2em] big:text-[8em] font-bold whitespace-nowrap text-gray-900 dark:text-white text-wrapper transform translate-x-[70%] transition-colors duration-300">
                    {t.incentive.text}
                </h1>
            </div>
        </div>
    );
};

export default Incentive;