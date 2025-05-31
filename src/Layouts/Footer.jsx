import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col gap-10 bg-gray-900 w-full items-center justify-center mt-26">
            <img src="/Remove-bg.ai_1745424329358.png" alt="Bu yerda icon bor" className="w-56"/>
                <ul className="flex items-center gap-10">
                    <a href="/" className="footer-navbar-link"><li>Home</li></a>
                    <a href="/About" className="footer-navbar-link"><li>About Me</li></a>
                    <a href="/Mobile" className="footer-navbar-link"><li>Mobile App</li></a>
                    <a href="/Project" className="footer-navbar-link"><li>Projects</li></a>
                    <a href="/Skill" className="footer-navbar-link"><li>Skills</li></a>
                    <a href="/Conact" className="footer-navbar-link"><li>Contact</li></a>
                </ul>
            <div className="flex gap-3 dark:text-white text-black">
                <a href="https://www.github.com/"><i className="bx bxl-github icons"></i></a>
                <a href="https://www.youtube.com/@Milanus1s"><i className="bx bxl-youtube icons"></i></a>
                <a href="t.me://asusZeen/"><i className="bx bxl-telegram icons"></i></a>
                <a href="https://www.instagram.com/"><i className="bx bxl-instagram icons"></i></a>
            </div>
            <div className="flex bg-gray-700 items-center w-full h-24 justify-center">
                <h1 className="text-lg xl:text-2xl">© 2025 Dzero-Null All Rights Reserved, INC.</h1>
            </div>
        </div>
    )
}
export default Footer
