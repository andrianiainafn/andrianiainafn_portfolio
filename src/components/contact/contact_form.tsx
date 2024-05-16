import React from 'react';
import { IoSendOutline } from "react-icons/io5";

const ContactForm = () => {
    return (
        <form className="w-[50%] text-white flex flex-col items-end space-y-6">
            <div className="flex flex-col space-y-2 w-[80%]">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="John Doe" className="outline-none py-2 px-4 border border-[#304336d9] rounded-full bg-transparent"/>
            </div>
            <div className="flex items-center justify-between w-[80%]">
                <div className="flex flex-col space-y-2 w-[50%]">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="johndoe@gmail.com" className="outline-none py-2 px-4 border border-[#304336d9] rounded-full bg-transparent"/>
                </div>
                <div className="flex flex-col space-y-2 w-[45%]">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="phone" placeholder="+26134568643" className="outline-none py-2 px-4 border border-[#304336d9] rounded-full bg-transparent"/>
                </div>
            </div>
            <div className="flex flex-col space-y-2 w-[80%]">
                <label htmlFor="message">Message</label>
                <textarea rows={4} name="message" placeholder="Write what you whant..." className="outline-none py-2 px-4 border rounded-xl border-[#304336d9] bg-transparent"/>
            </div>
            <button  className="flex  w-[80%]  justify-center cursor-pointer items-center space-x-2  border text-sm font-medium relative border-[#304336d9] text-white  px-4 py-3 rounded-full">
                <span>Submit</span>
                <IoSendOutline/>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
        </form>
    );
};

export default ContactForm;