import React from 'react'

const Learned = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            {/*For only phone*/}
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="100">
                    <img src="/icons/MongoDB.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Mongo DB</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="200">
                    <img src="/icons/Express.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-gray-300"/>
                    <h1>Express</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="300">
                    <img src="/icons/Angular.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-red-300"/>
                    <h1>Angular</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="400">
                    <img src="/icons/Python.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Python</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="500">
                    <img src="/icons/Kotlin.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-purple-300"/>
                    <h1>Kotlin</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="600">
                    <img src="/icons/PyCharm.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Pycharm</h1>
                </div>
            </div>
            <div className="flex items-center xl:hidden">
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="500">
                    <img src="/icons/Node.js.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Node.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-up" data-aos-delay="600">
                    <img src="/icons/Flutter.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>Flutter</h1>
                </div>
            </div>
        {/*    For only desktops*/}
            <div className="items-center hidden xl:flex">
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="300">
                    <img src="/icons/MongoDB.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Mongo DB</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="100">
                    <img src="/icons/Express.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-gray-300"/>
                    <h1>Express</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="100">
                    <img src="/icons/Angular.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-red-300"/>
                    <h1>Angular</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="300">
                    <img src="/icons/Python.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Python</h1>
                </div>
            </div>
            <div className="items-center hidden xl:flex">
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="400">
                    <img src="/icons/Kotlin.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-purple-300"/>
                    <h1>Kotlin</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-right" data-aos-delay="200">
                    <img src="/icons/PyCharm.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Pycharm</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="200">
                    <img src="/icons/Node.js.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-green-300"/>
                    <h1>Node.js</h1>
                </div>
                <div className="qandayqanaqa" data-aos="fade-left" data-aos-delay="400">
                    <img src="/icons/Flutter.svg" alt="This is android icon" className="best-icons drop-shadow-md drop-shadow-blue-300"/>
                    <h1>Flutter</h1>
                </div>
            </div>
        </div>
    )
}
export default Learned
