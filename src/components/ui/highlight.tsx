import {ReactNode} from "react";
import {cn} from "@/utils/cn";
import {motion} from  "framer-motion"

export const Highlight = ({
                              children,
                              className,
                          }: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-[#304336d9] `,
                className
            )}
        >
            {children}
        </motion.span>
    );
};