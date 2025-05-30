'use client'
import React, { useState } from 'react';
import "@/app/globals.css";
import 'boxicons/css/boxicons.min.css';
import Button from "@/Components/ui/Button";
import MobileButton from "@/Components/ui/MobileButton";
import Icon from "@/Assets/Remove-bg.ai_1745424329358.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-[8vh] flex items-center px-4 relative justify-between">
            <div>
                <img src={Icon} alt="Dark logo" className="hidden dark:block" width="128px"/>
            </div>

            {/* 📱 Hamburger icon only on phone */}
            <div className="md:hidden text-3xl z-50" >
                <i
                    className='bx bx-menu'
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ cursor: 'pointer' }}
                ></i>
            </div>

            {/* 📱 Mobil menyu: faqat isOpen = true bo'lsa */}
            {isOpen && (
                <div className="flex w-full flex-col gap-10 items-center h-screen fixed top-0 left-0 md:hidden justify-center bg-black z-40">
                    <ul className="flex w-[300px] flex-col gap-10 text-white text-2xl">
                        <a href="/" className="mobile-navbar-links">
                            <i className='bx bx-home'></i>
                            <li>Home</li>
                        </a>
                        <a href="/About" className="mobile-navbar-links">
                            <i className='bx bx-pen'></i>
                            <li>About Me</li>
                        </a>
                        <a href="/Mobile" className="mobile-navbar-links">
                            <i className='bx bx-mobile'></i>
                            <li>Mobile App</li>
                        </a>
                        <a href="/Project" className="mobile-navbar-links">
                            <i className='bx bx-file'></i>
                            <li>Projects</li>
                        </a>
                        <a href="/Skill" className="mobile-navbar-links">
                            <i className='bx bx-star'></i>
                            <li>Skills</li>
                        </a>
                        <a href="/Conact" className="mobile-navbar-links">
                            <i className='bx bxs-contact'></i>
                            <li>Conact</li>
                        </a>
                        <MobileButton />
                    </ul>
                </div>
            )}

            {/* 💻 Oddiy navbar (faqat katta ekranlar uchun) */}
            <div className="gap-10 items-center top-0 left-0 justify-center hidden md:flex">
                <ul className="flex items-center gap-10">
                    <a href="/" className="desktop-navbar-link">
                        <li>Home</li>
                    </a>
                    <a href="/About" className="desktop-navbar-link">
                        <li>About Me</li>
                    </a>
                    <a href="/Mobile" className="desktop-navbar-link">
                        <li>Mobile App</li>
                    </a>
                    <a href="/Project" className="desktop-navbar-link">
                        <li>Projects</li>
                    </a>
                    <a href="/Skill" className="desktop-navbar-link">
                        <li>Skills</li>
                    </a>
                    <a href="/Conact" className="desktop-navbar-link">
                        <li>Conact</li>
                    </a>
                </ul>
                <Button />
            </div>
        </header>
    );
};

export default Header;
