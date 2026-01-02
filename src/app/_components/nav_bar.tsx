"use client";
import React from "react";
import {FloatingNav} from "@/app/_components/loating-navbar";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi"
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import {PageContent} from "@/components/header/page_content";
import {INav} from "@/type/nav_type";
import {useLanguage} from "@/components/ui/language-provider";

export function FloatingNavContainer() {
    const { t } = useLanguage();
    const navItems:INav[] = [
        {
            name: t.nav.home,
            link: "#home",
            icon: <IoHomeOutline className="h-4 w-4 big:h-5 big:w-5 " />,
        },
        {
            name: t.nav.about,
            link: "#about",
            icon: <FaRegUser className="h-4 w-4 big:h-5 big:w-5" />,
        },
        {
            name: t.nav.projects,
            link: "#project",
            icon: (
                <FaTasks className="h-4 w-4  big:h-5 big:w-5" />
            ),
        },
        {
            name: t.nav.skills,
            link: "#skills",
            icon: (
                <IoExtensionPuzzleOutline className="h-4 w-4 big:h-5 big:w-5" />
            ),
        },
        {
            name: t.nav.contact,
            link: "#contact",
            icon: (
                <FiMessageSquare className="h-4 w-4 big:h-5 big:w-5" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
            <PageContent />
        </div>
    );
}

