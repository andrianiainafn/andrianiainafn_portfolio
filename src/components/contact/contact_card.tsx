import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import {contacts} from "@/utils/contact_data";
import ContactCardItem from "@/components/contact/contact_card_item";
import {IContact} from "@/type/contact_type";

const ContactCard = () => {
    return (
        <div className="flex text-white flex-wrap w-full justify-between">
            {
                contacts.map((contact:IContact,key:number)=>(
                    <ContactCardItem contact={contact} key={key}/>
                ))
            }
        </div>
    );
};

export default ContactCard;