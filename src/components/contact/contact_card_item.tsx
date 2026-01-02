import React from 'react';
import {IContact} from "@/type/contact_type";
import {useLanguage} from "@/components/ui/language-provider";

interface Props{
    contact:IContact
}

const ContactCardItem = (props:Props) => {
    const { t } = useLanguage();
    const {contact} = props
    
    const getContactLabel = (label: string) => {
        switch(label) {
            case "Email me": return t.contact.cards.email;
            case "My location": return t.contact.cards.location;
            case "Call me": return t.contact.cards.call;
            default: return label;
        }
    }
    return (
        <div className="group flex flex-col space-y-3 relative big:text-xl p-2">
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"/>
            <div className="relative flex backdrop-filter flex-col space-y-3 backdrop-blur-sm bg-gradient-to-br from-gray-100/80 to-white dark:from-white/10 dark:to-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 rounded-xl p-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10">
                <div className="text-blue-500 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                </div>
                <h5 className="cursor-pointer text-gray-700 dark:text-white/80 group-hover:text-gray-900 dark:group-hover:text-white font-medium">{getContactLabel(contact.label)}</h5>
                <span className="text-gray-600 dark:text-white/60 group-hover:text-gray-800 dark:group-hover:text-white/80 text-nowrap transition-colors">{contact.value}</span>
            </div>
        </div>
    );
};

export default ContactCardItem;