import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import ContactForm from "@/components/contact/contact_form";
import {Highlight} from "@/components/ui/highlight";
import ContactCard from "@/components/contact/contact_card";

const Contact = () => {
    return (
        <div className=" px-[5%] space-y-5" id="contact">
            <SectionTitle label="Contact"/>
            <div className="flex flex-col  mm:flex-row space-x-3 mm:space-y-0 mm:justify-between">
                <div className="text-white flex flex-col big:space-y-6 space-y-3 w-full mm:w-[45%]">
                    <h2 className="text-2xl vm:text-4xl big:text-6xl ">
                        Let&apos;s build an <Highlight className="text-nowrap">awesome project</Highlight>
                        &nbsp;together!
                    </h2>
                    <p className="opacity-75 big:text-xl">
                        Explore my work, discover my projects, and get inspired.
                        Need a robust web or mobile application? Or just want to chat about your next project?
                        Contact me now!
                    </p>
                    <ContactCard/>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;