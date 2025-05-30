'use client';
import React, { useState } from 'react';
import "@/app/globals.css";
import 'boxicons/css/boxicons.min.css';
import Button from "@/Components/ui/Button";
import MobileNavbar from "@/Components/MobileNavbar"; // ✅ qo‘shildi

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="z-100 w-full h-[8vh] fixed lg:top-5 left-1/2 lg:rounded-full transform -translate-x-1/2 flex items-center px-4 lg:px-16 justify-between lg:transform lg:-translate-x-1/2 lg:w-[80%] bg-[#1e1e1e]">
                <div>
                    <img src="/Remove-bg.ai_1745424329358.png" alt="Dark logos" className="w-32 h-auto" />
                </div>

                {/* 📱 Hamburger icon */}
                <div className="md:hidden text-3xl z-102">
                    <i
                        className='bx bx-menu'
                        onClick={() => setIsOpen(true)}
                        style={{ cursor: 'pointer' }}
                    ></i>
                </div>

                {/* 💻 Navbar for desktop */}
                <div className="gap-10 items-center top-0 left-0 justify-center hidden md:flex">
                    <ul className="flex items-center gap-10">
                        <a href="/" className="desktop-navbar-link"><li>Home</li></a>
                        <a href="/About" className="desktop-navbar-link"><li>About Me</li></a>
                        <a href="/Mobile" className="desktop-navbar-link"><li>Mobile App</li></a>
                        <a href="/Project" className="desktop-navbar-link"><li>Projects</li></a>
                        <a href="/Skill" className="desktop-navbar-link"><li>Skills</li></a>
                        <a href="/Conact" className="desktop-navbar-link"><li>Contact</li></a>
                    </ul>
                    <Button text="Download CV" />
                </div>
            </header>

            {/* ✅ Mobil menyu (alohida komponent orqali) */}
            {isOpen && <MobileNavbar onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default Header;
