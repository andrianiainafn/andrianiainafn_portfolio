import {IFormInput} from "@/type/contact_type";
import {toast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";
import React from "react";


export function sendEmail(data: IFormInput){
    const apiEndpoint = '/api/email';
    let res = false
    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            toast({
                title: "Send Message ",
                variant: "success",
                description: "Message has been sent successfully",
                action: (
                    <ToastAction altText="Go project to undo">Undo</ToastAction>
                ),
            })

        })
        .catch((err) => {
            toast({
                title: "Send Message ",
                variant: "destructive",
                description: "Message not sent,Verify your email address",
                action: (
                    <ToastAction altText="Go project to undo">Undo</ToastAction>
                ),
            })
        });
}