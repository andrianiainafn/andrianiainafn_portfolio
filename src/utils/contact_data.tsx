import {IContact} from "@/type/contact_type";
import { MdOutlineEmail ,MdOutlineLocalPhone,MdOutlineLocationOn} from "react-icons/md";


export const contacts:IContact[] = [
    {
        label:"Email me",
        value:"nomena.pro@gmail.com",
        icon: <MdOutlineEmail className="opacity-75"/>
    },
    {
        label:"My location",
        value:"Tananarive, Madagascar",
        icon: <MdOutlineLocationOn className="opacity-75"/>
    },
    {
        label:"Call me",
        value:"+261 34 43 831 15 / +261 33 34 781 43",
        icon: <MdOutlineLocalPhone className="opacity-75"/>
    },
]
