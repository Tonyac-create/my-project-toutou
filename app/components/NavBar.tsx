'use client'

import MenuNavigation from './MenuNavigation';
import { useState } from 'react';
import Image from 'next/image'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[var(--background)] fixed w-full top-0 z-50 pt-5 xl:py-5">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <h1>
                        <Image
                            src="/la_maison_de_toutou_resize.png"
                            width={250}
                            height={150}
                            priority={true}
                            quality={100}
                            alt="La maison de toutou"
                            className="w-[150px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-auto"
                        />
                    </h1>
                    <nav className='hidden xl:flex space-x-8'>
                        <ul className='flex my-auto gap-11 text-2xl ml-auto text-center'>
                            <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                        </ul>
                    </nav>
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="xl:hidden w-10 h-10"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <Image
                                    src="/icons/xmark.svg"
                                    width={36}
                                    height={36}
                                    alt=""
                                    className='w-9 h-9 transition-transform duration-400 rotate-90 hover:rotate-180 [filter:invert(88%)_sepia(31%)_saturate(1000%)_hue-rotate(41deg)_brightness(103%)_contrast(103%)]'
                                />
                            ) : (
                                <Image
                                    src="/icons/bars.svg"
                                    width={36}
                                    height={36}
                                    alt=""
                                    className='w-9 h-9 transition-transform duration-400 hover:scale-110 [filter:invert(88%)_sepia(31%)_saturate(1000%)_hue-rotate(41deg)_brightness(103%)_contrast(103%)]'
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`xl:hidden bg-[var(--background)] pt-5 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col items-center bg-[var(--background)] shadow-lg transform transition-transform duration-700 ease-in-out">
                    <ul className={`flex flex-col my-auto mr-auto pl-4 sm:pl-6 lg:pl-8 gap-5 text-2xl mb-2 transition-all duration-700 transform 
                            ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                    </ul>
                </nav>
            </div>
        </header>
    )
}
