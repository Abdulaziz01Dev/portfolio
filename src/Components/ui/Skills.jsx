import React from 'react'
import Slidebar from "@/Components/ui/Slidebar";

const Skills = () => {
    return (
        <div className="flex flex-col gap-6">
            <Slidebar text="Web Dasturlash" percentage={75} />
            <Slidebar text="WebSitelar Disayni" percentage={80} />
            <Slidebar text="Robototexnika" percentage={46} />
            <Slidebar text="Mobil Dasturlash" percentage={79} />
        </div>
    )
}
export default Skills