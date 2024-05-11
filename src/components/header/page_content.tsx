import Header from "@/components/header/header";
import React from "react";

export const PageContent = () => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
                <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
                    Portfolio
                </p>
                <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
            </div>
        </div>
    );
};