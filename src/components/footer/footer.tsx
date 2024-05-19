import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6"
import { MdOutlineEmail ,MdOutlineLocalPhone,MdOutlineLocationOn} from "react-icons/md";
// import { FaAppStoreIos } from "react-icons/fa";
// import { FaAndroid } from "react-icons/fa6";
// import { CiGlobe } from "react-icons/ci";



const Footer = () => {
    return (
        <div className="text-white relative w-full   bg-[#304336d9]  flex flex-col md:justify-between items-start px-[5%] py-[2%]  ">
            <div  className="space-y-3">
                <h3 className="font-bold text-xl">Find me in</h3>
                <div className="flex space-x-2  items-center">
                    <FaFacebook className="opacity-75" size={25}/>
                    <FaGithub className="opacity-75" size={25}/>
                    <FaWhatsapp className="opacity-75" size={25}/>
                    <FaXTwitter className="opacity-75" size={25}/>
                </div>
                <p className='opacity-70'> andrianiainafn &#169; {new Date().getFullYear()} </p>
            </div>
            <div className="flex flex-col space-y-3">
                <h4 className="font-bold text-xl">Products</h4>
                <div className="space-y-2">
                    <p className="opacity-75">IOS and Android application</p>
                    <p className="opacity-75">Web application</p>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <h4 className="font-bold text-xl">Services</h4>
                <div className="space-y-2">
                    <p className="opacity-75">Frontend development</p>
                    <p className="opacity-75">Backend development</p>
                    <p className="opacity-75">Mobile development</p>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <h4 className="font-bold text-xl">Contact</h4>
                <div className="space-y-2">
                    <div className="flex space-x-2 items-center opacity-75">
                        <MdOutlineEmail size={20}/>
                        <p>nomena.pro@gmial.com</p>
                    </div>
                    <div className="flex space-x-2 items-center opacity-75">
                        <MdOutlineLocationOn size={20}/>
                        <p>Antananarivo, Madagascar</p>
                    </div>
                    <div className="flex space-x-2 items-center opacity-75">
                        <MdOutlineLocalPhone size={20}/>
                        <p>+261 34 43 831 15 / +261 33 34 781 43</p>
                    </div>
                </div>
            </div>
         {/*   <div className="w-full absolute*/}
         {/*bg-[#304336d9]/10 h-[50%] -skew-y-12 "/>*/}
        </div>
    );
};

export default Footer;