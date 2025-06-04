'use client';
import React, { useEffect } from 'react';
import MobileButton from "@/Components/ui/MobileButton";

const MobileNavbar = () => {
    useEffect(() => {
        // Sahifa scroll'ini o‘chirish
        document.body.style.overflow = 'hidden';

        // Komponent unmount bo‘lganda scrollni qayta yoqish
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="flex w-full flex-col overflow-hidden gap-10 items-center h-screen fixed top-0 left-0 md:hidden justify-center dark:bg-black bg-white z-100 dark:text-white text-black">
            <div className="md:hidden text-3xl">
            </div>

            <ul className="flex w-[300px] flex-col gap-10 text-white text-2xl">
                <a href="/" className="mobile-navbar-links">
                    <i className='bx bx-home'></i>
                    <li>Asosiy</li>
                </a>
                <a href="/About" className="mobile-navbar-links">
                    <i className='bx bx-pen'></i>
                    <li>Men Haqimda</li>
                </a>
                <a href="/Mobile" className="mobile-navbar-links">
                    <i className='bx bx-mobile'></i>
                    <li>Mobil Dasturlarim</li>
                </a>
                <a href="/Project" className="mobile-navbar-links">
                    <i className='bx bx-file'></i>
                    <li>Proyektlarim</li>
                </a>
                <a href="/Skill" className="mobile-navbar-links">
                    <i className='bx bx-desktop'></i>
                    <li>Kampyuter Dasturi</li>
                </a>
                <a href="/Conact" className="mobile-navbar-links">
                    <i className='bx bxs-contact'></i>
                    <li>Bog'lanish</li>
                </a>
                <MobileButton />
            </ul>
        </div>
    )
}
export default MobileNavbar
