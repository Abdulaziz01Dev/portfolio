import React from "react";

const Slidebar = ({ text, percentage = 70 }) => {
    return (
        <div className="mb-6">
            <h1 className="text-sm lg:text-2xl font-semibold mb-2">{text}</h1>
            <div className="w-full h-[10px] bg-gray-200 rounded-full relative">
                {/* Filled part */}
                <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>

                {/* Circle dot at the end */}
                <div
                    className="w-6 h-6 bg-white border-2 border-orange-500 rounded-full -top-1 absolute"
                    style={{ left: `calc(${percentage}% - 10px)` }} // 8px is half of the dot size
                ></div>
            </div>
        </div>
    );
};

export default Slidebar;
