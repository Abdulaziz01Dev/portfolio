import React from 'react'
import Skills from "@/Components/ui/Skills";

const AboutMe = () => {
    return (
        <div className="w-full flex gap-5 flex-col xl:flex-row px-5 mt-64 lg:px-80 dark:text-white text-black">
            <div className="w-full h-[50%] lg:w-[50%]">
                <img data-aos="zoom-in-center" data-aos-delay="100" src="/AboutMe.png" alt="This is the best image"/>
            </div>
            <div className="flex flex-col gap-5 lg:w-[50%]">
                <h1 className="text-5xl dark:text-white text-gray-500" data-aos="fade-right" data-aos-delay="200">Men Haqimda</h1>
                <p className="paragraph" data-aos="fade-right" data-aos-delay="300">Men O'zbekiston Respublikasi Andijon Viloyatida yashayman va hozirda 9-sinf o'quvchisiman. Hozirda Web dasturlashning Frontend WEB & Mobile yo'nalishida tajriba orttirib borayapman!</p>
                <Skills />
            </div>
        </div>
    )
}
export default AboutMe
