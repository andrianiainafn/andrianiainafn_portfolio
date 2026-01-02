import React from 'react';
import { IoSendOutline } from "react-icons/io5";
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormInput} from "@/type/contact_type";
import {sendEmail} from "@/utils/send_mail";
import {useLanguage} from "@/components/ui/language-provider";




const ContactForm = () => {
    const { t } = useLanguage();
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
          sendEmail(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full big:text-xl text-gray-900 dark:text-white flex flex-col space-y-6 bg-gradient-to-br from-gray-50/80 to-white dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-500/20 dark:shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 transition-shadow duration-300">
            <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-white/80">{t.contact.form.name}</label>
                <input {...register("name",{required:true})} type="text" name="name" placeholder={t.contact.form.placeholders.name} className="outline-none py-3 px-5 border border-gray-300 dark:border-white/20 hover:border-blue-500/50 focus:border-blue-500 rounded-xl bg-white dark:bg-white/5 focus:bg-gray-50 dark:focus:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 transition-all duration-300"/>
                {errors.name && <span className="text-red-400 text-xs">{t.contact.form.name} {t.contact.form.placeholders.required}</span>}
            </div>
            <div className="flex items-center justify-between w-full gap-4">
                <div className="flex flex-col space-y-2 flex-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-white/80">{t.contact.form.email}</label>
                    <input {...register("email",{required:true})} type="email" name="email" placeholder={t.contact.form.placeholders.email} className="outline-none py-3 px-5 border border-gray-300 dark:border-white/20 hover:border-blue-500/50 focus:border-blue-500 rounded-xl bg-white dark:bg-white/5 focus:bg-gray-50 dark:focus:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 transition-all duration-300"/>
                    {errors.email && <span className="text-red-500 dark:text-red-400 text-xs">{t.contact.form.email} {t.contact.form.placeholders.required}</span>}
                </div>
                <div className="flex flex-col space-y-2 flex-1">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-white/80">{t.contact.form.phone}</label>
                    <input {...register("phone",{required:false})} type="text" name="phone" placeholder={t.contact.form.placeholders.phone} className="outline-none py-3 px-5 border border-gray-300 dark:border-white/20 hover:border-blue-500/50 focus:border-blue-500 rounded-xl bg-white dark:bg-white/5 focus:bg-gray-50 dark:focus:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 transition-all duration-300"/>
                </div>
            </div>
            <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-white/80">{t.contact.form.message}</label>
                <textarea {...register("message",{required:true})} rows={5} name="message" placeholder={t.contact.form.placeholders.message} className="outline-none py-3 px-5 border border-gray-300 dark:border-white/20 hover:border-blue-500/50 focus:border-blue-500 rounded-xl bg-white dark:bg-white/5 focus:bg-gray-50 dark:focus:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 transition-all duration-300 resize-none"/>
                {errors.message && <span className="text-red-500 dark:text-red-400 text-xs">{t.contact.form.message} {t.contact.form.placeholders.required}</span>}
            </div>
            <button type="submit" className="group flex w-full justify-center cursor-pointer items-center space-x-2 border text-sm font-medium relative border-gray-300 dark:border-white/20 hover:border-blue-500/60 text-gray-900 dark:text-white px-6 py-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                <span>{t.contact.form.submit}</span>
                <IoSendOutline className="transform group-hover:translate-x-1 transition-transform duration-300"/>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </form>
    );
};

export default ContactForm;