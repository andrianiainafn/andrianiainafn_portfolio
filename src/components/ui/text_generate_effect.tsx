"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import {cn} from "@/utils/cn";


export const TextGenerateEffect = ({
                                       words,
                                       className,
                                   }: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    
    useEffect(() => {
        if (scope.current) {
            // Reset opacity to 0 first
            animate(
                "span",
                {
                    opacity: 0,
                },
                {
                    duration: 0,
                }
            ).then(() => {
                // Then animate to 1
                animate(
                    "span",
                    {
                        opacity: 1,
                    },
                    {
                        duration: 2,
                        delay: stagger(0.2),
                    }
                );
            });
        }
    }, [words, animate, scope]);

    return (
        <div className={cn("", className)}>
            <div className="">
                <div className="text-gray-900 dark:text-white leading-snug tracking-wide big:text-2xl">
                    <motion.div ref={scope}>
                        {wordsArray.map((word, idx) => {
                            return (
                                <motion.span
                                    key={`${words}-${idx}-${word}`}
                                    className="text-gray-900 dark:text-white opacity-0"
                                >
                                    {word}{" "}
                                </motion.span>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};