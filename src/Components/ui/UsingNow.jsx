import React from 'react'
import "../../app/globals.css"

const UsingNow = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            {/*For mobile*/}
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="100">
                    <img src="/icons/AndroidStudio.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Android Studio</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="200">
                    <img src="/icons/Blender.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-amber-300"/>
                    <h1>Blender</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="300">
                    <img src="/icons/CSS3.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>CSS3</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="400">
                    <img src="/icons/Electron.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Electron.js</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="500">
                    <img src="/icons/Figma.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-purple-300"/>
                    <h1>Figma</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="600">
                    <img src="/icons/Git.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-red-300"/>
                    <h1>Git</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="700">
                    <img src="/icons/HTML5.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-orange-300"/>
                    <h1>HTML5</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="800">
                    <img src="/icons/JavaScript.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-yellow-300"/>
                    <h1>JavaScript</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="900">
                    <img src="/icons/React.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>React.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="1000">
                    <img src="/icons/Tailwind%20CSS.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>TailwindCSS</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="1100">
                    <img src="/icons/Vite.js.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-purple-300"/>
                    <h1>Vite.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="1200">
                    <img src="/icons/WebStorm.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>Webstorm</h1>
                </div>
            </div>

        {/*    For only Desktops */}
            <div className="items-center hidden xl:flex">
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="300">
                    <img src="/icons/AndroidStudio.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Android Studio</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="100">
                    <img src="/icons/Blender.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-amber-300"/>
                    <h1>Blender</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="100">
                    <img src="/icons/CSS3.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>CSS3</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="300">
                    <img src="/icons/Electron.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Electron.js</h1>
                </div>
            </div>
            <div className="items-center hidden xl:flex">
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="400">
                    <img src="/icons/Figma.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-purple-300"/>
                    <h1>Figma</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="200">
                    <img src="/icons/Git.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-red-300"/>
                    <h1>Git</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="200">
                    <img src="/icons/HTML5.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-orange-300"/>
                    <h1>HTML5</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="400">
                    <img src="/icons/JavaScript.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-yellow-300"/>
                    <h1>JavaScript</h1>
                </div>
            </div>
            <div className="items-center hidden xl:flex">
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="500">
                    <img src="/icons/React.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>React.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="300">
                    <img src="/icons/Tailwind%20CSS.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>TailwindCSS</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="300">
                    <img src="/icons/Vite.js.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-purple-300"/>
                    <h1>Vite.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="500">
                    <img src="/icons/WebStorm.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>Webstorm</h1>
                </div>
            </div>
        </div>
    )
}
export default UsingNow
