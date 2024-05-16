import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import ContactForm from "@/components/contact/contact_form";
import {Highlight} from "@/components/ui/highlight";
import ContactCard from "@/components/contact/contact_card";

const Contact = () => {
    return (
        <div className="h-screen px-[5%] space-y-5" id="contact">
            <SectionTitle label="Contact"/>
            <div className="flex justify-between">
                <div className="text-white flex flex-col space-y-3 w-[45%]">
                    <h2 className="text-4xl">
                        Let&apos;s build an <Highlight className="text-nowrap">awesome project</Highlight>
                        &nbsp;together!
                    </h2>
                    <p className="opacity-75">
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