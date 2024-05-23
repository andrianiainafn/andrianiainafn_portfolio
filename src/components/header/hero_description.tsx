"use client";
import {TextGenerateEffect} from "@/components/ui/text_generate_effect";

const words =
    `Fluent in both full-stack and mobile development,
    I create stunning digital solutions from concept to launch.
    Let's turn your ideas into exceptional experiences!`;

export function TextGenerateEffectHero() {
    return <TextGenerateEffect words={words} className="opacity-75" />;
}