import {FaFacebook, FaGithub} from "react-icons/fa";
import {FaWhatsapp, FaXTwitter} from "react-icons/fa6";
import React from "react";
import {IFooterLink} from "@/type/footer_type";


export const footerLink:IFooterLink[] = [
    {
        icon:<FaFacebook className="opacity-75" size={25}/>,
        link:"https://www.facebook.com/andrianiainafn"
    },
    {
        icon:<FaGithub className="opacity-75" size={25}/>,
        link:"https://github.com/andrianiainafn"
    },
    {
        icon:<FaWhatsapp className="opacity-75" size={25}/>,
        link:""
    },
    {
        icon:<FaXTwitter className="opacity-75" size={25}/>,
        link:"https://x.com/ANDRIANIAINAFN"
    },
]