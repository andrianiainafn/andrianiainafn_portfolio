import {FaFacebook, FaGithub} from "react-icons/fa";
import {FaWhatsapp, FaXTwitter} from "react-icons/fa6";
import React from "react";
import {IFooterLink} from "@/type/footer_type";


export const footerLink:IFooterLink[] = [
    {
        icon:<FaFacebook className="opacity-75" size={25}/>,
        link:""
    },
    {
        icon:<FaGithub className="opacity-75" size={25}/>,
        link:""
    },
    {
        icon:<FaWhatsapp className="opacity-75" size={25}/>,
        link:""
    },
    {
        icon:<FaXTwitter className="opacity-75" size={25}/>,
        link:""
    },
]