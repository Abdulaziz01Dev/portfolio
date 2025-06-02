import React, { useEffect, useRef } from "react";

const Slidebar = ({ text, percentage = 70 }) => {
    const barRef = useRef(null);
    const dotRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const bar = barRef.current;
                    const dot = dotRef.current;

                    // Reset
                    bar.style.transition = "none";
                    dot.style.transition = "none";
                    bar.style.width = "0%";
                    dot.style.left = `calc(0% - 10px)`;

                    // Force reflow
                    void bar.offsetWidth;

                    // Animate
                    bar.style.transition = "width 1s ease";
                    dot.style.transition = "left 1s ease";
                    bar.style.width = `${percentage}%`;
                    dot.style.left = `calc(${percentage}% - 10px)`;
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [percentage]);

    return (
        <div ref={containerRef} className="mb-6">
            <h1 className="text-sm lg:text-2xl font-semibold mb-2">{text}</h1>
            <div className="w-full h-[10px] bg-gray-200 rounded-full relative overflow-visible">
                <div
                    ref={barRef}
                    className="h-full bg-purple-500 rounded-full"
                ></div>
                <div
                    ref={dotRef}
                    className="w-6 h-6 bg-white border-2 border-purple-500 rounded-full -top-1 absolute"
                ></div>
            </div>
        </div>
    );
};

export default Slidebar;
