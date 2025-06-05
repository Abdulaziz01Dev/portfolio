import React from 'react';
import "../app/globals.css";
import BestLayout from "@/Components/ui/BestLayout";

const Skills = () => {
    return (
        <section className="relative flex flex-col gap-10 mt-80 py-5 w-full">

            {/* Glassmorphism background card */}
            <div className="absolute inset-0 -z-10">
                <div className="xl:w-[90%] w-full mx-auto h-full rounded-3xl bg-white/10 opacity-50 border border-gray-400 shadow-xl" />
            </div>

            {/* Foreground content */}
            <div className="flex flex-col items-center gap-10 z-10">
                <h1 className="text-3xl text-gray-200 uppercase border-2 xl:transition-colors duration-300 border-purple-500 inline-block p-4 xl:hover:bg-purple-500 rounded-2xl cursor-pointer">
                    Tajribam
                </h1>
                <BestLayout />
            </div>

        </section>
    );
};

export default Skills;
