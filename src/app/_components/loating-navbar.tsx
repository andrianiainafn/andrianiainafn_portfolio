"use client";
import React, {ReactNode, useState} from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { GrDownload } from "react-icons/gr";
import ActionButton from "@/components/ui/action_button";
import LinksItem from "@/app/_components/links_item";
import {INav} from "@/type/nav_type";
import {ThemeToggle} from "@/components/ui/theme-toggle";
import {LanguageToggle} from "@/components/ui/language-toggle";
import {useLanguage} from "@/components/ui/language-provider";

export const FloatingNav = ({
                                navItems,
                                className,
                            }: {
    navItems: INav[];
    className?: string;
}) => {
    const { t } = useLanguage();
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number

        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;
            if (scrollYProgress.get() == 0){
                setVisible(true)
            }
            if (scrollYProgress.get() < 0) {
                setVisible(false);
            } else {
                if (direction <= 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-6 md:top-10 inset-x-0 mx-auto border border-gray-200/50 dark:border-white/10 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 z-[5000] pr-2 pl-6 md:pl-8 py-2.5 md:py-2 items-center justify-center gap-2 md:gap-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <LinksItem key={idx} idx={idx} link={navItem.link} icon={navItem.icon} name={navItem.name}/>
                ))}
                <LanguageToggle />
                <ThemeToggle />
                <Link download target="_blank" rel="noopener noreferrer" href="CV-Nomena-Andrianiaina-fullstack.pdf" className="flex items-end">
                    <ActionButton  label={t.nav.resume} icon={<GrDownload/>}/>
                </Link>
            </motion.div>
        </AnimatePresence>
    );
};
