import React from 'react'
import "../../app/globals.css"

const ProjectsCard = ( { text, pText, url, aosDelay}) => {
    return (
        <div data-aos="fade-up" data-aos-delay={aosDelay} className="px-5 w-[375px] xl:w-[400px] overflow-hidden rounded-xl flex flex-col gap-5 text-black bg-purple-300 h-[450px] xl:h-[525px] xl:shadow-xl xl:hover:shadow-gray-400 xl:transition-all items-center py-4 duration-300 cursor-pointer">
            <div className="w-full h-[80%] flex items-center justify-center">
                <img src={url} alt="Salom bu yerda rasm bo'lishi kerak!" className="w-64 xl:hover:scale-110 xl:transition-all xl:duration-300"/>
            </div>
            <div className="dark:text-white w-full h-[20%] text-black flex flex-col gap-2">
                <p className="paragraphs">{text}</p>
                <h1 className="header">{pText}</h1>
            </div>
        </div>
    )
}
export default ProjectsCard
