import React from 'react'

const OtherSkills = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            {/*For only mobile*/}
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="100">
                    <img src="/united-arab-emirates.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-white"/>
                    <h1>Arabic <p>C1/C2</p></h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="200">
                    <img src="/turkey.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-red-300"/>
                    <h1>Learning<p>Now</p></h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="300">
                    <img src="/Next.js.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-gray-300"/>
                    <h1>Next.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="400">
                    <img src="/Arduino.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Ardoino</h1>
                </div>
            </div>

        {/*    For onyl Destkops*/}
            <div className="hidden items-center xl:flex">
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="100">
                    <img src="/united-arab-emirates.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-white"/>
                    <h1>Arabic <p>C1/C2</p></h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="200">
                    <img src="/turkey.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-red-300"/>
                    <h1>Learning<p>Now</p></h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="300">
                    <img src="/Next.js.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-gray-300"/>
                    <h1>Next.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="400">
                    <img src="/Arduino.png" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Ardoino</h1>
                </div>
            </div>
        </div>
    )
}
export default OtherSkills
