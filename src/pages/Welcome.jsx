import React, { useEffect, useState, useRef } from "react";
import centerImg from "../assets/center.png";
import leftImg from "../assets/left.png";
import rightImg from "../assets/right.png";

const Welcome = () => {
    const fullText = `Your PC might be slow not from weak hardware, but from how Windows handles it.
IQ Optimizer clears what holds it back, boosts responsiveness, and makes everything run smoother, especially in games.
No upgrades needed. Just smarter performance in one click.`;

    const [displayedLength, setDisplayedLength] = useState(0);
    const [startTyping, setStartTyping] = useState(false);
    const frameRef = useRef(null);
    const textRef = useRef(null);

    // ✅ يبدأ الكتابة فقط عندما يظهر النص على الشاشة
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setStartTyping(true);
            },
            { threshold: 0.5 }
        );
        if (textRef.current) observer.observe(textRef.current);
        return () => observer.disconnect();
    }, []);

    // ✅ حركة الكتابة السلسة (أبطأ قليلاً)
    useEffect(() => {
        if (!startTyping) return;
        let startTime;
        const speed = 40; // أبطأ قليلاً لتبدو واقعية
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress >= speed) {
                setDisplayedLength((prev) => {
                    if (prev < fullText.length) return prev + 1;
                    cancelAnimationFrame(frameRef.current);
                    return prev;
                });
                startTime = timestamp;
            }

            frameRef.current = requestAnimationFrame(step);
        };

        frameRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frameRef.current);
    }, [startTyping, fullText]);

    return (
        <section className="  px-6 relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white font-[Poppins]">

            {/* الصور */}
            <div className="relative flex items-end justify-center gap-4 sm:gap-6 md:gap-10 w-full max-w-7xl z-20 mt-24 px-4">
                {/* يسار */}
                <div className="relative z-10 translate-y-4">
                    <img
                        src={leftImg}
                        alt="Left"
                        className="hidden sm:flex lg:flex md:flex w-[100px] sm:w-[150px] md:w-[200px]  xl:w-[1000px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] object-contain"
                        style={{ position: "relative", top: "-80px", right: "-246px" }}
                    />
                </div>

                {/* الوسط */}
                <div className="relative z-30 -translate-y-10">
                    {/* طبقة شفافية من الأعلى */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/60 via-black/20 to-transparent rounded-t-2xl pointer-events-none"></div>

                    {/* الصورة */}
                    <img
                        src={centerImg}
                        alt="Center"
                        className="relative w-[500px] sm:w-[220px] md:w-[300px] lg:w-[350px] xl:w-[1200px] rounded-2xl object-contain"
                    />
                </div>


                {/* يمين */}
                <div className="relative z-10 translate-y-6">
                    <img
                        src={rightImg}
                        alt="Right"
                        className="w-[200px] hidden sm:w-[150px] sm:flex lg:flex md:flex md:w-[200px]  xl:w-[1000px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] object-contain"
                        style={{ position: "relative", top: "-100px", left: "-246px" }}
                    />
                </div>
            </div>

            {/* النص */}
            <div ref={textRef} className="relative  mt-2 text-center max-w-2xl px-6">
                <svg
                    className="relative top-[-250px] left-[5px] -z-10 md:top-[-150px] md:left-[0px]"
                    width="47"
                    height="337"
                    viewBox="0 0 47 337"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="10.5" y1="0" x2="10.5" y2="303" stroke="white" />
                    <line x1="10.5" y1="59" x2="10.5" y2="298" stroke="#3457DC" />
                    <path d="M13.9059 317.086H8.46094V311.641H13.9059V317.086Z" fill="white" />
                    <path d="M22.5928 309.165H21.5578V303.99H16.3828V303H22.5928V309.165Z" fill="white" />
                    <path d="M1.035 309.165H0V303H6.21V303.99H1.035V309.165Z" fill="white" />
                    <path d="M22.5928 325.411H16.3828V324.421H21.5578V319.246H22.5928V325.411Z" fill="white" />
                    <path d="M6.21 325.411H0V319.246H1.035V324.421H6.21V325.411Z" fill="white" />
                    <path d="M46.7094 336.615H33.0294L21.7344 325.275L22.4544 324.555L33.4794 335.58H46.7094V336.615Z" fill="white" />
                </svg>


                <div className="mb-6 relative top-[-245px] md:top-[-160px] md:left-[70px] " >
                    <p className="text-xs text-start uppercase tracking-widest text-gray-200 mb-2">
                        Get the Best Out of Your Setup
                    </p>

                    <div className="text-gray-300/90  sm:text-base leading-relaxed text-start whitespace-pre-line md:text-md  lg:text-lg xl:text-xl font-light">
                        {fullText.split("").map((char, i) => {
                            const isVisible = i < displayedLength;
                            return (
                                <span
                                    key={i}
                                    className={`transition-colors duration-75 ${
                                        isVisible ? "text-white" : "text-gray-500/20"
                                    }`}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Welcome;
