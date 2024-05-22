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

export const FloatingNav = ({
                                navItems,
                                className,
                            }: {
    navItems: INav[];
    className?: string;
}) => {
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
                    "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border  border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <LinksItem key={idx} idx={idx} link={navItem.link} icon={navItem.icon} name={navItem.name}/>
                ))}
                <Link download target="_blank" rel="noopener noreferrer" href="CV-Nomena-Andrianiaina.pdf" className="flex items-end">
                    <ActionButton  label="Get my resume" icon={<GrDownload/>}/>
                </Link>
            </motion.div>
        </AnimatePresence>
    );
};
