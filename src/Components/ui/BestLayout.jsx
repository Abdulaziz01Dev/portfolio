import React from 'react'
import SkillCard from "@/Components/ui/SkillCard";

const BestLayout = () => {
    return (
        <div>
            {/*It's only mobile*/}
            <div className="flex lg:hidden flex-col gap-10">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#a9a9a9]">Hozirda Foydalanilgan Texnologiyalar</h1>
                <div className="grid grid-cols-2 place-items-center gap-5 xl:grid-cols-4">
                    <SkillCard  image="/icons/HTML5.svg" title="HTML5" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard image="/icons/CSS3.svg" title="CSS3" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/React.svg" title="React" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard image="/icons/Tailwind CSS.svg" title="TailwindCss" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/JavaScript.svg" title="JavaScript" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard image="/icons/Figma.svg" title="Figma" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/Next.js.svg" title="Next" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard image="/icons/Blender.svg" title="Blender" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/Vite.js.svg" title="Vite" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/Linux.svg" title="Linux" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-[#a9a9a9]">O'rganilinayotgan Texnologiyalar</h1>
                <div className="grid grid-cols-2 place-items-center gap-5 xl:grid-cols-4">
                    <SkillCard  image="/icons/Kotlin.svg" title="Kotlin" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard image="/icons/Node.js.svg" title="Node JS" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/MongoDB.svg" title="Mongo Data Base" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard image="/icons/Electron.svg" title="Electron JS" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/Express.svg" title="Express" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard image="/icons/Python.svg" title="Python" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/Git.svg" title="Git VCS" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard image="/icons/TypeScript.svg" title="TypeScript" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-[#a9a9a9]">Qo'shimcha</h1>
                <div className="grid grid-cols-2 place-items-center gap-5 xl:grid-cols-4">
                    <SkillCard  image="/Arduino.png" title="Ardoino" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard image="/united-arab-emirates.png" title="Arab Tili" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard  image="/icons/unity.svg" title="Unity" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard image="/icons/Anaconda.svg" title="Anaconda" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                </div>
            </div>
        {/*    For only desktops*/}
            <div className="flex-col hidden lg:flex gap-10">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#a9a9a9]">Hozirda Foydalanilgan Texnologiyalar</h1>
                <div className="grid grid-cols-2 place-items-center gap-5 xl:grid-cols-4">
                    <SkillCard dateAos="fade-up" dateDelay="100" image="/icons/HTML5.svg" title="HTML5" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard dateAos="fade-up" dateDelay="200" image="/icons/CSS3.svg" title="CSS3" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="300" image="/icons/React.svg" title="React" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="400" image="/icons/Tailwind CSS.svg" title="TailwindCss" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="500" image="/icons/JavaScript.svg" title="JavaScript" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard dateAos="fade-up" dateDelay="600" image="/icons/Figma.svg" title="Figma" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="700" image="/icons/Next.js.svg" title="Next" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="800" image="/icons/Blender.svg" title="Blender" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="900" image="/icons/Vite.js.svg" title="Vite" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="1000" image="/icons/Linux.svg" title="Linux" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-[#a9a9a9]">O'rganilinayotgan Texnologiyalar</h1>
                <div className="grid grid-cols-2 place-items-center gap-5 xl:grid-cols-4">
                    <SkillCard dateAos="fade-up" dateDelay="100" image="/icons/Kotlin.svg" title="Kotlin" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard dateAos="fade-up" dateDelay="200" image="/icons/Node.js.svg" title="Node JS" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="300" image="/icons/MongoDB.svg" title="Mongo Data Base" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="400" image="/icons/Electron.svg" title="Electron JS" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="500" image="/icons/Express.svg" title="Express" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="600" image="/icons/Python.svg" title="Python" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="700" image="/icons/Git.svg" title="Git VCS" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="800" image="/icons/TypeScript.svg" title="TypeScript" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-[#a9a9a9]">Qo'shimcha</h1>
                <div className="grid grid-cols-2 place-items-center gap-5 xl:grid-cols-4">
                    <SkillCard dateAos="fade-up" dateDelay="100" image="/Arduino.png" title="Ardoino" description="Angular bu Frontend frameworki bo'lib men uni bilaman!" />
                    <SkillCard dateAos="fade-up" dateDelay="200" image="/united-arab-emirates.png" title="Arab Tili" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="300" image="/icons/unity.svg" title="Unity" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                    <SkillCard dateAos="fade-up" dateDelay="400" image="/icons/Anaconda.svg" title="Anaconda" description="Angular bu Frontend frameworki bo'lib men uni bilaman!"/>
                </div>
            </div>
        </div>
    )
}
export default BestLayout
