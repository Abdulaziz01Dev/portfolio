import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col bg-white dark:bg-black w-full items-center justify-center mt-26 pt-5">
           <div className="flex lg:flex-col px-6 py-4 items-center justify-center w-full">
               <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center w-full gap-10">
                   <div className="flex w-full xl:w-auto">
                       <img src="/iconka.png" alt="Bu yerda icon bor" className="w-26 h-26"/>
                   </div>
                   <ul className="flex flex-col lg:flex-row w-full xl:w-auto lg:items-center lg:gap-10 gap-5">
                       <a href="/" className="footer-navbar-link">
                           <i className='bx bx-home'></i><li>Asosiy</li>
                       </a>
                       <a href="/About" className="footer-navbar-link">
                           <i className='bx bx-pen'></i>
                           <li>Men Haqimda</li>
                       </a>
                       <a href="/Mobile" className="footer-navbar-link">
                           <i className='bx bx-mobile'></i>
                           <li>Mobil Dasturlarim</li>
                       </a>
                       <a href="/Project" className="footer-navbar-link">
                           <i className='bx bx-file'></i>
                           <li>Proyektlar</li>
                       </a>
                       <a href="/Skill" className="footer-navbar-link">
                           <i className='bx bx-desktop'></i>
                           <li>Kampyuter Dasturi</li>
                       </a>
                       <a href="/Language" className="footer-navbar-link">
                           <i className='bx bx-world'></i>
                           <li>Arab - Tili</li>
                       </a>
                   </ul>
                   <div className="flex w-full dark:text-white xl:w-auto text-gray-300">
                       <a href="https://www.github.com/"><i className="bx bxl-github icons"></i></a>
                       <a href="https://www.youtube.com/@Milanus1s"><i className="bx bxl-youtube icons"></i></a>
                       <a href="t.me://asusZeen/"><i className="bx bxl-telegram icons"></i></a>
                       <a href="https://www.instagram.com/"><i className="bx bxl-instagram icons"></i></a>
                   </div>
               </div>
           </div>
            <div className="flex bg-white dark:bg-gray-950 items-center w-full h-14 justify-center">
                <h1 className="text-sm xl:text-xl dark:text-[#a9a9a9] text-gray-600">© 2025 Dzero-Null Barcha Huquqlar Himoyalangan, INC.</h1>
            </div>
        </div>
    )
}
export default Footer
