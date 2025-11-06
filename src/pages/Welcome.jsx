import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import centerImg from "../assets/center.png";
import leftImg from "../assets/left.png";
import rightImg from "../assets/right.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    const fullText = t("welcome.description");
    const [displayedLength, setDisplayedLength] = useState(0);
    const [startTyping, setStartTyping] = useState(false);
    const frameRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1600, once: true });
    }, []);

    useEffect(() => {
        const el = textRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.querySelectorAll(".animate-line").forEach(line =>
                        line.classList.add("line-draw")
                    );
                }
            },
            { threshold: 0.3 }
        );

        if (el) observer.observe(el);
        return () => el && observer.unobserve(el);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) setStartTyping(true);
            },
            { threshold: 0.5 }
        );
        if (textRef.current) observer.observe(textRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!startTyping) return;
        let startTime;
        const speed = 40;
        const step = timestamp => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress >= speed) {
                setDisplayedLength(prev => {
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

    // Reset typing effect when language changes
    useEffect(() => {
        setDisplayedLength(0);
        setStartTyping(false);
    }, [t]);

    return (
        <section
            dir={isRTL ? "rtl" : "ltr"}
            className="px-6 relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white font-[Poppins]"
        >
            <div
                className={`relative flex items-center  justify-center gap-4 sm:gap-6 md:gap-10 w-full max-w-7xl z-20 mt-24 px-4 ${
                    isRTL ? "flex-row" : ""
                }`}
            >
                <div
                    className={`relative z-10 translate-y-4`}
                    data-aos={isRTL ? "fade-right" : "fade-left"}
                >
                    <img
                        src={isRTL ? rightImg : leftImg}
                        alt="Side"
                        className="hidden sm:flex lg:flex md:flex w-[100px] sm:w-[150px] md:w-[200px] xl:w-[1000px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] object-contain"
                        style={{
                            position: "relative",
                            top: "-80px",
                            [isRTL ? "left" : "right"]: "-246px",
                        }}
                    />
                </div>

                <div
                    className="relative z-30 rounded-4xl bg-none border-none shadow-[0_-13px_10px_-10px_#0d2787] -translate-y-10"
                    data-aos="fade-up"
                >
                    <div className="relative z-30 rounded-7xl bg-none border-none shadow-[0_-12px_14px_-10px_#0d2787]">
                        <div className="relative z-30 rounded-2xl bg-none border-none shadow-[0px_-10px_10px_-10px_#4bdffb]">
                            <img
                                src={centerImg}
                                alt="Center"
                                className="relative w-[500px] sm:w-[220px] md:w-[300px] lg:w-[350px] xl:w-[1200px] rounded-2xl object-contain shadow-[0_-30px_30px_-24px_rgba(52,87,219,0.7)]"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className={`relative z-10 translate-y-6`}
                    data-aos={isRTL ? "fade-left" : "fade-right"}
                >
                    <img
                        src={isRTL ? leftImg : rightImg}
                        alt="Side"
                        className="hidden sm:flex lg:flex md:flex w-[200px] sm:w-[150px] md:w-[200px] xl:w-[1000px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] object-contain"
                        style={{
                            position: "relative",
                            top: "-100px",
                            [isRTL ? "right" : "left"]: "-246px",
                        }}
                    />
                </div>
            </div>


            <div ref={textRef} className="relative mt-2 text-center max-w-2xl px-6">
                <svg
                    className={`relative ${
                        isRTL
                            ? "top-[-250px] right-[5px] md:top-[-150px] md:right-[0px]"
                            : "top-[-250px] left-[5px] md:top-[-150px] md:left-[0px]"
                    } -z-10`}
                    width="47"
                    height="337"
                    viewBox="0 0 47 337"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="10.5"
                        y1="0"
                        x2="10.5"
                        y2="303"
                        stroke="white"
                        className="animate-line"
                    />
                    <line
                        x1="10.5"
                        y1="59"
                        x2="10.5"
                        y2="298"
                        stroke="#3457DC"
                        className="animate-line"
                    />


                        <path d="M13.9059 317.086H8.46094V311.641H13.9059V317.086Z" fill="white" />
                        <path d="M22.5928 309.165H21.5578V303.99H16.3828V303H22.5928V309.165Z" fill="white" />
                        <path d="M1.035 309.165H0V303H6.21V303.99H1.035V309.165Z" fill="white" />
                        <path d="M22.5928 325.411H16.3828V324.421H21.5578V319.246H22.5928V325.411Z" fill="white" />
                        <path d="M6.21 325.411H0V319.246H1.035V324.421H6.21V325.411Z" fill="white" />
                        <path d="M46.7094 336.615H33.0294L21.7344 325.275L22.4544 324.555L33.4794 335.58H46.7094V336.615Z" fill="white" />

                </svg>


                <div
                    className={`mb-6 relative ${
                        isRTL
                            ? "top-[-245px] md:top-[-160px] md:right-[70px] text-right"
                            : "top-[-245px] md:top-[-160px] md:left-[70px] text-left"
                    }`}
                >
                    <p className="text-xs uppercase tracking-widest text-gray-200 mb-2">
                        {t("welcome.subtitle")}
                    </p>

                    <div className="text-gray-300/90 sm:text-base leading-relaxed whitespace-pre-line md:text-md lg:text-lg xl:text-xl font-light">
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
