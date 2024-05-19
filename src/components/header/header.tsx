import React from 'react';
import Image from "next/image";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ActionButton from "@/components/ui/action_button";
import HeaderResponsiveContent from "@/components/header/header_responsive_content";
import HeaderContent from "@/components/header/header_content";



const Header = () => {
    return (
        <>
            <HeaderResponsiveContent/>
            <HeaderContent/>
        </>
    );
};

export default Header;