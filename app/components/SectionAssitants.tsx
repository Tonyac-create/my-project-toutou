'use client'

import Image from "next/image";
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function SectionAssitants() {
    const matchaRef = useRef(null);
    const dianeRef = useRef(null);
    const ghostRef = useRef(null);

    return (
        <section className="flex flex-col mb-20">
            <div className="flex flex-row items-center gap-3 mb-6">
                <Image
                    src="/icons/dog.svg"
                    width={50}
                    height={50}
                    priority={true}
                    quality={100}
                    alt="Chien"
                    className="w-[50px] h-[50px] object-cover [filter:invert(78%)_sepia(61%)_saturate(495%)_hue-rotate(41deg)_brightness(103%)_contrast(106%)]"
                />
                <h2 className="text-4xl font-bold">Mes assistants</h2>
            </div>
            <div ref={matchaRef} className={`flex flex-row items-center gap-5 slide-left ${useInView(matchaRef) ? 'in-view' : ''}`}>
                <Image
                    src="/matcha.avif"
                    width={150}
                    height={150}
                    priority={true}
                    quality={100}
                    alt="Matcha"
                    className="w-[150px] h-[150px] rounded-full mb-6"
                />
                <p className="text-4xl font-bold font-heading text-[var(--foreground-alt)]">Matcha</p>
            </div>
            <div ref={dianeRef} className={`flex flex-row-reverse items-center gap-5 slide-right ${useInView(dianeRef) ? 'in-view' : ''}`}>
                <Image
                    src="/diane.avif"
                    width={150}
                    height={150}
                    priority={true}
                    quality={100}
                    alt="Diane"
                    className="w-[150px] h-[150px] rounded-full mb-6"
                />
                <div className="flex flex-col gap-1">
                    <p className="text-4xl font-bold font-heading text-[var(--foreground-alt)]">Diane</p>
                    <p className="text-lg text-[var(--foreground)]">Ex-assistant</p>
                </div>
            </div>
            <div ref={ghostRef} className={`flex flex-row items-center gap-5 slide-left ${useInView(ghostRef) ? 'in-view' : ''}`}>
                <Image
                    src="/ghost.avif"
                    width={150}
                    height={150}
                    priority={true}
                    quality={100}
                    alt="Ghost"
                    className="w-[150px] h-[150px] rounded-full mb-6"
                />
                <div className="flex flex-col gap-1">
                    <p className="text-4xl font-bold font-heading text-[var(--foreground-alt)]">Ghost</p>
                    <p className="text-lg text-[var(--foreground)]">Ex-assistant</p>
                </div>
            </div>
        </section>
    )
}