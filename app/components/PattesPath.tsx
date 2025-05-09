'use client'

import Image from "next/image";
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function PattesPath() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef);

    return (
        <div 
            ref={containerRef}
            className="flex flex-row items-center gap-8 absolute top-36 right-0 paw-container"
        >
            <Image
                src="/Patte_verte_path.png"
                width={50}
                height={50}
                priority={true}
                quality={100}
                alt="Pattes path"
                className={`translate-y-[-1rem] paw-animation ${isInView ? 'in-view' : ''}`}
            />
            <Image
                src="/patte_blanche_path.png"
                width={50}
                height={50}
                priority={true}
                quality={100}
                alt="Pattes path"
                className={`translate-y-[1rem] paw-animation ${isInView ? 'in-view' : ''}`}
            />
            <Image
                src="/Patte_verte_path.png"
                width={50}
                height={50}
                priority={true}
                quality={100}
                alt="Pattes path"
                className={`translate-y-[-1rem] paw-animation ${isInView ? 'in-view' : ''}`}
            />
            <Image
                src="/patte_blanche_path.png"
                width={50}
                height={50}
                priority={true}
                quality={100}
                alt="Pattes path"
                className={`translate-y-[1rem] paw-animation ${isInView ? 'in-view' : ''}`}
            />
        </div>
    );
}