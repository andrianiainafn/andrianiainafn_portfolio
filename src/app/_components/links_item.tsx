"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import Link from "next/link";

interface Props {
    idx: number;
    link: string;
    icon: ReactNode;
    name: string;
}

const LinksItem = (props: Props) => {
    const { idx, link, icon, name } = props;
    const [isActive, setIsActive] = useState(false);

    const handleHashChange = () => {
        setIsActive(window.location.hash === link);
    };

    useEffect(() => {
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <Link
            key={`link=${idx}`}
            href={link}
            onClick={() => {
                // Directly update the hash and then handle the hash change
                window.location.hash = link;
                handleHashChange();
            }}
            className={
                `relative items-center  flex space-x-1 hover:text-blue-400 ${isActive ? "text-blue-500" : "text-neutral-50"}`
            }
        >
            {icon}
            <span className="hidden sm:block text-sm big:text-2xl">{name}</span>
        </Link>
    );
};

export default LinksItem;
