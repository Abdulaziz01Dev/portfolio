import React from 'react'
import "../../app/globals.css"

const ProjectsCard = ( { text, pText, url, aosDelay}) => {
    return (
        <div data-aos="fade-up" data-aos-delay={aosDelay} className="px-5 xl:w-[450px] overflow-hidden rounded-xl flex flex-col gap-20  dark:bg-purple-950 bg-white shadow-sm shadow-gray-400 items-center py-4 cursor-pointer">
            <div className="w-full h-[70%] flex items-center justify-center">
                <img src={url} alt="Salom bu yerda rasm bo'lishi kerak!" className="w-64 xl:hover:scale-110 xl:transition-all xl:duration-300"/>
            </div>
            <div className="h-[30%] w-full flex items-center flex-col gap-2">
                <p className="paragraphs">{text}</p>
                <h1 className="header">{pText}</h1>
            </div>
        </div>
    )
}
export default ProjectsCard
