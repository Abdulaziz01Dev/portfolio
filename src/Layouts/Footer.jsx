import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col gap-10 bg-[#2b2b2b] w-full items-center justify-center mt-26">
            <img src="/Remove-bg.ai_1745424329358.png" alt="Bu yerda icon bor" className="w-56"/>
                <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-5">
                    <a href="/" className="footer-navbar-link">
                        <i className='bx bx-home'></i><li>Home</li>
                    </a>
                    <a href="/About" className="footer-navbar-link">
                        <i className='bx bx-pen'></i>
                        <li>About Me</li>
                    </a>
                    <a href="/Mobile" className="footer-navbar-link">
                        <i className='bx bx-mobile'></i>
                        <li>Mobile App</li>
                    </a>
                    <a href="/Project" className="footer-navbar-link">
                        <i className='bx bx-file'></i>
                        <li>Projects</li>
                    </a>
                    <a href="/Skill" className="footer-navbar-link">
                        <i className='bx bx-desktop'></i>
                        <li>Desktop App</li>
                    </a>
                    <a href="/Conact" className="footer-navbar-link">
                        <i className='bx bxs-contact'></i>
                        <li>Contact</li>
                    </a>
                </ul>
            <div className="flex gap-3 dark:text-white text-black">
                <a href="https://www.github.com/"><i className="bx bxl-github icons"></i></a>
                <a href="https://www.youtube.com/@Milanus1s"><i className="bx bxl-youtube icons"></i></a>
                <a href="t.me://asusZeen/"><i className="bx bxl-telegram icons"></i></a>
                <a href="https://www.instagram.com/"><i className="bx bxl-instagram icons"></i></a>
            </div>
            <div className="flex bg-[#1b1b1b] items-center w-full h-24 justify-center">
                <h1 className="text-lg xl:text-2xl">© 2025 Dzero-Null All Rights Reserved, INC.</h1>
            </div>
        </div>
    )
}
export default Footer
