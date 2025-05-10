'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function SectionPictures() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: '/chien_canape_toutou.jpg', alt: 'Chien sur le canapé' },
        { src: '/chien_texte_toutou.avif', alt: 'Chien sur le canapé 2' },
        { src: '/corde_chien_toutou.jpg', alt: 'Chien sur le canapé 3' },
        { src: '/labrador_toutou.avif', alt: 'Chien sur le canapé 4' },
        { src: '/troupe_chien_toutou.avif', alt: 'Chien sur le canapé 5' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="pictures" className="flex flex-col pt-32">
            <div className="flex flex-row items-center gap-3 mb-6">
                <Image
                    src="/icons/camera.svg"
                    width={40}
                    height={40}
                    priority={true}
                    quality={100}
                    alt="Camera"
                    className="w-[40px] h-[40px] object-cover [filter:invert(78%)_sepia(61%)_saturate(495%)_hue-rotate(41deg)_brightness(103%)_contrast(106%)]"
                />
                <h2 className="text-4xl font-bold">Photos & vidéos</h2>
            </div>
            <p className="text-lg text-[var(--foreground-alt)]">
                {`Mes pensionnaires en action !`}
            </p>
            <p className="text-lg text-[var(--foreground-alt)]">
                {`Ou pas ? 😉`}
            </p>
            {/* Mobile Carousel */}
            <div className="md:hidden relative w-full mt-8">
                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[var(--background)] bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center text-[var(--foreground)] hover:bg-opacity-75"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[var(--background)] bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center text-[var(--foreground)] hover:bg-opacity-75"
                >
                    ❯
                </button>
                <div className="w-80 h-56 mx-auto">
                    <Image
                        src={images[currentSlide].src}
                        width={300}
                        height={200}
                        priority={true}
                        quality={100}
                        alt={images[currentSlide].alt}
                        className="w-full h-full rounded-lg object-cover"
                    />
                </div>
                <div className="flex justify-center gap-1 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[var(--foreground)]' : 'bg-[var(--foreground-alt)] opacity-50'}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:flex md:flex-wrap md:gap-4 mt-8 justify-center">
                {images.map((image, index) => (
                    <div key={index} className="w-80 h-56">
                        <Image
                            src={image.src}
                            width={300}
                            height={200}
                            priority={true}
                            quality={100}
                            alt={image.alt}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                ))}
            </div>
            <div>
                <Link href="https://www.facebook.com/frederique.viollet01140/videos" target="_blank" className="flex flex-row items-center gap-2 mt-8 text-[var(--foreground-alt)] hover:text-[var(--foreground)]">
                    <Image
                        src="/icons/Facebook.png"
                        width={80}
                        height={80}
                        priority={true}
                        quality={100}
                        alt="Facebook"
                        className="w-[80px] h-[80px] rounded-lg object-cover"
                    />
                    {`Retrouvez toutes nos vidéos et beaucoup d'autres photos sur notre page Facebook`}
                </Link>
            </div>
        </section>
    )
}