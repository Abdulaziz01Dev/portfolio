import React, { useState } from 'react';
import Project from "../Components/Project";
import AllProject from "@/Components/AllProject";
import WebProjects from "@/Components/ui/WebProjects";
import MobileProject from "@/Components/ui/MobileProject";
import SmallProject from "@/Components/ui/SmallProject";

const Projects = () => {
    const [selected, setSelected] = useState("Hammasi");

    return (
        <section className="dark:text-white w-full pt-16 items-center text-black flex flex-col gap-10">
            <div className="flex justify-center lg:items-center">
                <h1 className="text-3xl text-gray-200 uppercase border-2 xl:transition-colors duration-300 border-purple-500 inline-block p-4 xl:hover:bg-purple-500 rounded-2xl cursor-pointer">
                    Mening Proyektlarim
                </h1>
            </div>
            <p className="paragraph text-center">Siz bu yerda <a href="https://dzero-null.vercel.app" className="text-purple-500">DZERO NULL</a> tomonidan yasalgan Kichik, Mobil, Desktop va Web proyektlarni ko'rishingiz mumkin bo'ladi!</p>

            {/* Navbar */}
            <Project selected={selected} setSelected={setSelected} />

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {selected === "Hammasi" && <AllProject />}
                {selected === "Web Sahifalar" && <WebProjects />}
                {selected === "Mobil Dasturlar" && <MobileProject />}
                {selected === "Kichik Proyektlar" && <SmallProject />}
                {/* SmallProjects komponentini ham shu yerga qo‘shing */}
            </div>
        </section>
    );
};

export default Projects;
