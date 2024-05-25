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

export function FloatingNavContainer() {
        const navItems:INav[] = [
        {
            name: "Home",
            link: "#home",
            icon: <IoHomeOutline className="h-4 w-4 big:h-5 big:w-5 " />,
        },
        {
            name: "About",
            link: "#about",
            icon: <FaRegUser className="h-4 w-4 big:h-5 big:w-5" />,
        },
        {
            name: "Project",
            link: "#project",
            icon: (
                <FaTasks className="h-4 w-4  big:h-5 big:w-5" />
            ),
        },
        {
            name: "Skills",
            link: "#skills",
            icon: (
                <IoExtensionPuzzleOutline className="h-4 w-4 big:h-5 big:w-5" />
            ),
        },
        {
            name: "Contact",
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

