import { Download } from "lucide-react";
import { FaWindows } from "react-icons/fa";
import image1 from "../assets/image1.png";
import Welcome from "./Welcome";
import Complex from "@/pages/Complex.jsx";
import Iq from "@/pages/Iq.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    const isRTL = i18n.language === 'ar';
    const textAlign = isRTL ? 'text-right' : 'text-left';
    const flexDirection = isRTL ? 'flex-row-reverse' : 'flex-row';
    const justifyDirection = isRTL ? 'justify-right' : 'justify-left';
    const animationLeft = isRTL ? 'fade-right' : 'fade-left';
    const animationRight = isRTL ? 'fade-left' : 'fade-right';
    useEffect(() => {
        AOS.refresh();
    }, [i18n.language]);
    return (
        <div dir={isRTL ? 'rtl' : 'ltr'}>
            <section className="mt-6 min-h-screen text-white flex flex-col items-center justify-center px-8 md:px-36 pt-24 gilroy-font">
                <div className={`flex   flex-col md:flex-row items-center justify-center w-full max-w-7xl ${isRTL ? 'rtl' : ''}`}>

                    <div className={`${textAlign} md:w-1/3`}  data-aos={isRTL ? "fade-left" : "fade-right"}>
                        <h3 className=" flex px-4 flex-col  text-white leading-tight gilroy-bold font-bold text-5xl md:text-6xl">
                            <span className={`flex items-center ${justifyDirection}`}>
                                {t('hero.lag')}
                                <svg
                                    style={{
                                        position: "relative",
                                        top: "-4px",
                                        [isRTL ? 'right' : 'left']: "12px"
                                    }}
                                    width="38"
                                    height="38"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_2_22975)">
                                        <path
                                            d="M27.9999 38C27.9999 40.2 26.1999 42 23.9999 42C21.7999 42 19.9999 40.2 19.9999 38C19.9999 35.8 21.7999 34 23.9999 34C26.1999 34 27.9999 35.8 27.9999 38ZM47.4599 16.24C43.3999 11.86 38.2399 8.72 32.5199 7.14C31.4599 6.84 30.3599 7.48 30.0599 8.54C29.7599 9.6 30.3999 10.7 31.4599 11C36.4599 12.38 40.9799 15.14 44.5199 18.96C44.9199 19.38 45.4399 19.6 45.9799 19.6C46.4599 19.6 46.9599 19.42 47.3399 19.06C48.1399 18.3 48.1999 17.04 47.4399 16.24H47.4599ZM15.4599 7.16C9.73993 8.74 4.57994 11.88 0.519936 16.26C-0.240064 17.06 -0.180064 18.34 0.619936 19.08C0.999936 19.44 1.49994 19.62 1.97994 19.62C2.51994 19.62 3.05994 19.4 3.43994 18.98C6.99994 15.16 11.4999 12.4 16.4999 11.02C17.5599 10.72 18.1799 9.62 17.8999 8.56C17.5999 7.5 16.4999 6.86 15.4399 7.16H15.4599ZM32.9799 22.36C32.0199 21.82 30.7999 22.16 30.2599 23.12C29.7199 24.08 30.0599 25.3 31.0199 25.84C32.3199 26.58 33.4999 27.5 34.5199 28.6C34.9199 29.02 35.4399 29.24 35.9799 29.24C36.4599 29.24 36.9599 29.06 37.3399 28.7C38.1399 27.94 38.1999 26.68 37.4399 25.88C36.1399 24.48 34.6399 23.3 32.9799 22.36ZM15.0199 22.36C13.3599 23.3 11.8599 24.48 10.5599 25.88C9.79994 26.68 9.85993 27.96 10.6599 28.7C11.0399 29.06 11.5399 29.24 12.0199 29.24C12.5599 29.24 13.0999 29.02 13.4799 28.6C14.4999 27.5 15.6799 26.58 16.9799 25.84C17.9399 25.3 18.2799 24.08 17.7399 23.12C17.1999 22.16 15.9799 21.82 15.0199 22.36ZM23.9999 30.02C25.0999 30.02 25.9999 29.12 25.9999 28.02V8C25.9999 6.9 25.0999 6 23.9999 6C22.8999 6 21.9999 6.9 21.9999 8V28C21.9999 29.1 22.8999 30 23.9999 30V30.02Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_22975">
                                            <rect width="48" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className={`relative ${isRTL ? 'right-7' : 'left-7'}`}>,</span>
                            </span>
                            {t('hero.stutter')}
                        </h3>
                    </div>

                    <div className="md:w-1/3 w-2/3 flex justify-center" data-aos="fade-down">
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src={image1}
                                alt="Gameplay comparison"

                            />
                        </div>
                    </div>

                    <div className={`${isRTL ? 'text-center lg:text-center' : 'text-center lg:text-right'} w-1/3`} data-aos={animationRight}>
                        <h3 className="mb-2 px-1 py-2 flex flex-col text-white leading-tight gilroy-bold font-bold text-5xl md:text-6xl">
                            <span className={`flex items-center ${isRTL ? 'justify-center md:justify-center' : 'justify-center md:justify-center'}`}>
                                {t('hero.orLowFPS')}
                            </span>
                            <span className={`flex gap-4 ${isRTL ? 'justify-center md:justify-center' : 'justify-center md:justify-center'}`}>
                                {t('hero.fps')}
                                <svg
                                    className={`md:relative xl:relative absolute z-10 ${
                                        isRTL
                                            ? '-left-10 xl:right-0 md:right-0'
                                            : '-left-10 xl:left-0 md:left-0'
                                    } top-4 xl:top-4 md:top-4`}
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_2_22980)">
                                        <path d="M24.0002 27.9995C21.7902 27.9995 20.0002 26.2095 20.0002 23.9995C20.0002 23.6435 20.0622 23.3055 20.1482 22.9755L12.5862 15.4135C11.8042 14.6315 11.8042 13.3675 12.5862 12.5855C13.3682 11.8035 14.6322 11.8035 15.4142 12.5855L22.9762 20.1475C23.3042 20.0595 23.6442 19.9995 24.0002 19.9995C26.2102 19.9995 28.0002 21.7895 28.0002 23.9995C28.0002 26.2095 26.2102 27.9995 24.0002 27.9995ZM39.9922 6.10353C34.9062 1.55553 28.0562 -0.618473 21.2342 0.153527C10.4162 1.36953 1.5702 10.0815 0.198195 20.8735C-0.755805 28.3895 1.7642 35.7375 7.1102 41.0315C8.2622 42.1715 9.7882 42.7475 11.3182 42.7475C12.7202 42.7475 14.1262 42.2635 15.2562 41.2895L17.3082 39.5135C18.1422 38.7915 18.2342 37.5275 17.5122 36.6915C16.7902 35.8555 15.5262 35.7675 14.6902 36.4855L12.6382 38.2635C11.8462 38.9455 10.6562 38.9115 9.9242 38.1875C5.46819 33.7755 3.3702 27.6475 4.1662 21.3775C5.3082 12.3935 12.6722 5.13953 21.6782 4.12953C27.4702 3.46953 33.0242 5.23953 37.3242 9.08553C41.5662 12.8775 43.9982 18.3135 43.9982 23.9995C43.9982 26.1775 43.6502 28.3195 42.9642 30.3655C42.6142 31.4115 43.1782 32.5455 44.2242 32.8975C45.2722 33.2475 46.4062 32.6875 46.7562 31.6355C47.5802 29.1795 47.9962 26.6115 47.9962 24.0015C47.9962 17.1795 45.0782 10.6555 39.9882 6.10553L39.9922 6.10353ZM45.8902 43.3135C47.1022 45.3915 45.6042 47.9995 43.1982 47.9995H24.8022C22.3962 47.9995 20.8982 45.3895 22.1102 43.3135L31.3082 27.5455C32.5102 25.4835 35.4902 25.4835 36.6922 27.5455L45.8902 43.3135ZM36.0002 43.9995C36.0002 42.8955 35.1042 41.9995 34.0002 41.9995C32.8962 41.9995 32.0002 42.8955 32.0002 43.9995C32.0002 45.1035 32.8962 45.9995 34.0002 45.9995C35.1042 45.9995 36.0002 45.1035 36.0002 43.9995ZM36.0002 33.9995C36.0002 32.8955 35.1042 31.9995 34.0002 31.9995C32.8962 31.9995 32.0002 32.8955 32.0002 33.9995V37.9995C32.0002 39.1035 32.8962 39.9995 34.0002 39.9995C35.1042 39.9995 36.0002 39.1035 36.0002 37.9995V33.9995Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_22980">
                                            <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                {t('?')}
                            </span>
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 md:w-100 lg:w-120 max-w-xl mt-10 mb-8 text-center gilroy-regular text-md leading-relaxed">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-10 py-3 rounded-xl font-medium transition gilroy-medium">
                        {t('hero.downloadFree')}
                        <Download size={28} />
                    </button>

                    <button className="border text-[rgba(52,87,220,1)] border-[rgba(52,87,220,1)] hover:bg-gray-700 px-10 py-3 rounded-xl font-medium transition gilroy-medium">
                        {t('hero.comparePlans')}
                    </button>
                </div>

                <p className="text-gray-500 mt-8 text-sm flex items-center gap-2 gilroy-regular justify-center">
                    <FaWindows size={18} /> {t('hero.supportsWindows')}
                </p>
            </section>

            <Welcome/>
            <Complex/>
            <Iq/>
        </div>
    );
}