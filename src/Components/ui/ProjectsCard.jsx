import React from 'react'
import "../../app/globals.css"

const ProjectsCard = ( { text, pText, url, aosDelay}) => {
    return (
        <div data-aos="fade-up" data-aos-delay={aosDelay} className="px-5 w-[375px] xl:w-[400px] overflow-hidden rounded-xl flex flex-col gap-5 text-black bg-amber-50 h-[450px] xl:h-[525px] xl:shadow-xl xl:hover:shadow-gray-400 xl:transition-all duration-300 cursor-pointer">
            <img src={url} alt="Salom bu yerda rasm bo'lishi kerak!" className="w-full xl:hover:scale-110 xl:transition-all xl:duration-300"/>
            <div className="dark:text-white text-black flex flex-col gap-2">
                <p className="paragraphs">{text}</p>
                <h1 className="header">{pText}</h1>
            </div>
        </div>
    )
}
export default ProjectsCard
