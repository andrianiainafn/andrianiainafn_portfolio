import React from 'react';
import SectionTitle from "@/components/ui/section_title";
import ContactForm from "@/components/contact/contact_form";
import {Highlight} from "@/components/ui/highlight";
import ContactCard from "@/components/contact/contact_card";
import {useLanguage} from "@/components/ui/language-provider";

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section className="px-[5%] py-20 md:py-32 space-y-12 bg-white dark:bg-black transition-colors duration-300 scroll-mt-20" id="contact">
            <SectionTitle label={t.contact.title}/>
            <div className="flex flex-col mm:flex-row gap-8 mm:gap-12 mm:justify-between">
                <div className="text-gray-900 dark:text-white flex flex-col space-y-6 w-full mm:w-[45%]">
                    <h2 className="text-3xl vm:text-4xl md:text-5xl big:text-6xl font-semibold leading-tight">
                        {t.contact.heading.includes("awesome project") ? (
                            <>Let&apos;s build an <Highlight className="text-nowrap">awesome project</Highlight> together!</>
                        ) : (
                            <>Créons un <Highlight className="text-nowrap">projet exceptionnel</Highlight> ensemble !</>
                        )}
                    </h2>
                    <p className="text-gray-700 dark:text-white/70 big:text-xl leading-relaxed">
                        {t.contact.description}
                    </p>
                    <ContactCard/>
                </div>
                <div className="w-full mm:w-[50%]">
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default Contact;