import React from 'react'
import Button from "@/Components/ui/Button";
import '../app/globals.css';
const Hero = () => {
    return (
        <section className="flex flex-col gap-10 lg:flex-row px-5 lg:px-80 pt-64 lg:items-center justify-center w-full h-screen">
            {/*Faqatgina Desktopda ko'rinadi*/}

            <div className="flex-col gap-2 dark:text-white text-black w-full lg:w-[50vw] hidden lg:flex">
                <h6 className="text-2xl lg:text-4xl" data-aos="fade-right" data-aos-delay="1200">Hi I am</h6>
                <h5 className="text-4xl  text-purple-600 uppercase font-mono" data-aos="fade-right" data-aos-delay="900">Abdulaziz Vohobjonov</h5>
                <div className="flex flex-col gap-0 text-3xl xl:text-7xl">
                    <h1 data-aos="fade-right" data-aos-delay="700">Full Stack</h1>
                    <h1 data-aos="fade-right" data-aos-delay="500">Developer</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="paragraph" data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <Button text="Hire me" dateAos="fade-right"/>
                </div>
            </div>
            <div className="flex-col gap-2 w-full lg:w-[50vw] justify-center items-center hidden lg:flex">
                <img src="/HeroImage.png" alt="Shunchaki asosiy rasm" className="w-[70%] h-auto" data-aos="zoom-in-center" data-aos-delay="900"/>
                <div className="flex gap-3 dark:text-white text-black">
                    <a href="https://www.github.com/" data-aos="fade-up" data-aos-delay="100"><i className="bx bxl-github icons"></i></a>
                    <a href="https://www.youtube.com/@Milanus1s" data-aos="fade-up" data-aos-delay="300"><i className="bx bxl-youtube icons"></i></a>
                    <a href="t.me://asusZeen/" data-aos="fade-up" data-aos-delay="500"><i className="bx bxl-telegram icons"></i></a>
                    <a href="https://www.instagram.com/" data-aos="fade-up" data-aos-delay="700"><i className="bx bxl-instagram icons"></i></a>
                </div>
            </div>

        {/*    Bu esa mobileda ko'rinadi*/}

            <div className="flex flex-col gap-2 w-full lg:w-[50vw] justify-center items-center mt-10 lg:hidden">
                <img src="/HeroImage.png" alt="Shunchaki asosiy rasm" className="w-3/4 h-auto" data-aos="zoom-in-center" data-aos-delay="100"/>
                <div className="flex gap-3 text-4xl dark:text-white text-black">
                    <a data-aos="fade-up" data-aos-delay="200" href="#"><i className="bx bxl-github"></i></a>
                    <a data-aos="fade-up" data-aos-delay="400" href="#"><i className="bx bxl-youtube"></i></a>
                    <a data-aos="fade-up" data-aos-delay="600" href="#"><i className="bx bxl-telegram"></i></a>
                    <a data-aos="fade-up" data-aos-delay="800" href="#"><i className="bx bxl-instagram"></i></a>
                </div>
            </div>
            <div className="flex flex-col gap-2 dark:text-white text-black w-full lg:w-[50vw] lg:hidden">
                <h6 className="text-2xl lg:text-3xl" data-aos="fade-right" data-aos-delay="900">Hi I am</h6>
                <h5 className="text-3xl lg:text-4xl text-purple-600 uppercase" data-aos="fade-right" data-aos-delay="1000">Abdulaziz Vohobjonov</h5>
                {/*For mobile*/}
                <div className="flex flex-col text-3xl lg:hidden gap-4">
                    <h1 data-aos="fade-right" data-aos-delay="1100" className="text-5xl">Full Stack</h1>
                    <h1 data-aos="fade-right" data-aos-delay="1200" className="text-5xl">Developer</h1>
                </div>
                <div className="flex flex-col gap-2 lg:mt-26">
                    <p className="paragraph" data-aos="fade-right" data-aos-delay="1300">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <Button text="Hire me" dateAos="fade-up"/>
                </div>
            </div>
        </section>
    )
}
export default Hero
