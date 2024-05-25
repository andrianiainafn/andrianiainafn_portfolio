import React from 'react';
import {IContact} from "@/type/contact_type";

interface Props{
    contact:IContact
}

const ContactCardItem = (props:Props) => {
    const {contact} = props
    return (
        <div className="  flex flex-col  space-y-2 relative big:text-xl p-2">
            <div className="w-[60px] h-[40px] bg-[#304336d9] rounded-full absolute z-0 top-[50%]
                 left-[50%] transform translate-x-[-50%] translate-y-[-50%] blur-xl"/>
            <div className="above flex backdrop-filter flex-col space-y-3 backdrop-blur-[2px] blurText bg-white/5 rounded-lg  p-4">
                {contact.icon}
                <h5 className="cursor-pointer opacity-75">{contact.label}</h5>
                <span className=" opacity-50 text-nowrap">{contact.value}</span>
            </div>
        </div>
    );
};

export default ContactCardItem;