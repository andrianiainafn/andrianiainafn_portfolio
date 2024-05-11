"use client";
import React from "react";
import {FloatingNav} from "@/components/ui/loating-navbar";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi"
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import {PageContent} from "@/components/header/page_content";

export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: <IoHomeOutline className="h-4 w-4 text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <FaRegUser className="h-4 w-4 text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" />,
        },
        {
            name: "Project",
            link: "#contact",
            icon: (
                <FaTasks className="h-4 w-4 text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" />
            ),
        },
        {
            name: "Skills",
            link: "#skills",
            icon: (
                <IoExtensionPuzzleOutline className="h-4 w-4 text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" />
            ),
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <FiMessageSquare className="h-4 w-4 text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" />
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

