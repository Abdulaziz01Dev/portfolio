import React from "react";
import "../app/globals.css";

const BackgroundVideo = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden background-video">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/Video/18458403-hd_1920_1080_24fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
