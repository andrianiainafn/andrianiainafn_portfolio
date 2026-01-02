"use client";
import {TextGenerateEffect} from "@/components/ui/text_generate_effect";
import {useLanguage} from "@/components/ui/language-provider";

export function TextGenerateEffectHero() {
    const { t } = useLanguage();
    return <TextGenerateEffect words={t.header.description} className="opacity-75" />;
}