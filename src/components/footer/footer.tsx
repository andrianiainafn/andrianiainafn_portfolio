import React from 'react';
import { MdOutlineEmail ,MdOutlineLocalPhone,MdOutlineLocationOn} from "react-icons/md";
import {footerLink} from "@/utils/footer_data";
import Link from "next/link";
import {useLanguage} from "@/components/ui/language-provider";
// import { FaAppStoreIos } from "react-icons/fa";
// import { FaAndroid } from "react-icons/fa6";
// import { CiGlobe } from "react-icons/ci";



const Footer = () => {
    const { t } = useLanguage();
    return (
        <div className="text-gray-900 dark:text-white relative w-full big:text-xl bg-background flex flex-col space-y-8 vm:space-y-0 items-start m-auto vm:flex-row vm:justify-between vm:flex-wrap overflow-hidden vm:items-start px-[5%] py-12 md:py-16 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="space-y-4">
                <h3 className="font-semibold text-lg text-blue-500 dark:text-blue-400">{t.footer.findMe}</h3>
                <div className="flex space-x-3 items-center">
                    {
                        footerLink.map((elem,key)=>(
                            <Link key={key} href={elem.link} className="group hover:transition hover:scale-110 transition-all duration-300 text-gray-700 dark:text-white/70 hover:text-blue-500 dark:hover:text-blue-400 p-2 bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 rounded-lg backdrop-blur-sm">
                                {elem.icon}
                            </Link>
                        ))
                    }
                </div>
                <p className='text-gray-600 dark:text-white/60 text-sm'> andrianiainafn &#169; {new Date().getFullYear()} </p>
            </div>
            <div className="flex flex-col space-y-4">
                <h4 className="font-semibold text-lg text-blue-500 dark:text-blue-400">{t.footer.products}</h4>
                <div className="space-y-2">
                    <p className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">{t.footer.productsList.ios}</p>
                    <p className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">{t.footer.productsList.web}</p>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <h4 className="font-semibold text-lg text-blue-500 dark:text-blue-400">{t.footer.services}</h4>
                <div className="space-y-2">
                    <p className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">{t.footer.servicesList.frontend}</p>
                    <p className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">{t.footer.servicesList.backend}</p>
                    <p className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">{t.footer.servicesList.mobile}</p>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <h4 className="font-semibold text-lg text-blue-500 dark:text-blue-400">{t.footer.contact}</h4>
                <div className="space-y-3">
                    <div className="flex space-x-3 items-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors group">
                        <MdOutlineEmail size={18} className="text-blue-500 dark:text-blue-400"/>
                        <p className="text-sm">nomenaf.pro@gmail.com</p>
                    </div>
                    <div className="flex space-x-3 items-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors group">
                        <MdOutlineLocationOn size={18} className="text-blue-500 dark:text-blue-400"/>
                        <p className="text-sm">Antananarivo, Madagascar</p>
                    </div>
                    <div className="flex space-x-3 items-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors group">
                        <MdOutlineLocalPhone size={18} className="text-blue-500 dark:text-blue-400"/>
                        <p className="text-sm">+261 34 43 831 15 / +261 33 34 781 43</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;