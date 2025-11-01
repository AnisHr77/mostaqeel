import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Download, HelpCircle, Phone, Bug, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [supportTimeout, setSupportTimeout] = useState(null);
    const handleSupportEnter = () => {
        if (supportTimeout) clearTimeout(supportTimeout);
        setSupportOpen(true);
    };
    const handleSupportLeave = () => {
        const timeout = setTimeout(() => {
            setSupportOpen(false);
        }, 200);
        setSupportTimeout(timeout);
    };

    const [open, setOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({
        code: "en",
        flag: "https://flagcdn.com/w40/us.png",
        name: "English",
    });

    const langRef = useRef(null);
    const supportRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setLangOpen(false);
            }
            if (supportRef.current && !supportRef.current.contains(event.target)) {
                setSupportOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { name: "How it works", href: "#" },
        { name: "Pricings", href: "#" },
        { name: "Games library", href: "#" },
        { name: "Giveaways", href: "#" },
    ];

    const supportLinks = [
        { name: "FAQ", href: "#", description: "Frequently asked questions", icon: HelpCircle },
        { name: "Contact Us", href: "#", description: "Get in touch with our team", icon: Phone },
        { name: "Report Issue", href: "#", description: "Report bugs or problems", icon: Bug },
        { name: "Documentation", href: "#", description: "User guides and tutorials", icon: BookOpen },
    ];

    const languages = [
        { code: "en", flag: "https://flagcdn.com/w40/us.png", name: "English" },
        { code: "fr", flag: "https://flagcdn.com/w40/fr.png", name: "Français" },
        { code: "ar", flag: "https://flagcdn.com/w40/sa.png", name: "العربية" },
    ];

    return (
        <nav className="w-full  fixed top-0 left-0 z-50 bg-[#0c0c14]/95 backdrop-blur-md border-b border-gray-800 font-sans">
            <div className="max-w-7xl mx-auto px-10 sm:px-5 lg:px-16 py-4 flex items-center justify-between">
                {/* Left side: Logo + Links */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <svg width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_23387)">
                                <path d="M7.05267 9.97888V31.6404H5.59495C3.17545 31.6404 1.21375 29.3386 1.21375 26.5004V9.97888H7.05267Z" fill="white"/>
                                <path d="M1.13041 5.98934C0.928619 5.98934 0.501944 5.98336 0.304167 5.99133C0.163615 5.99731 0.0612131 5.95245 0.000976562 5.81787V5.69326C0.0612131 5.55868 0.163615 5.51282 0.304167 5.5198C0.479857 5.52777 0.884446 5.52179 1.06014 5.52179H1.13041C1.13041 5.3593 1.13041 4.27268 1.13041 4.11617C0.928619 4.11617 0.501944 4.11019 0.304167 4.11816C0.163615 4.12415 0.0612131 4.07928 0.000976562 3.9447V3.82009C0.0612131 3.68551 0.163615 3.63965 0.304167 3.64663C0.479857 3.65461 0.884446 3.64863 1.06014 3.64863C1.08423 3.64863 1.10732 3.64863 1.13041 3.64863C1.13041 3.48613 1.13443 2.46033 1.13443 2.3407C1.13443 1.98979 1.3573 1.75951 1.69563 1.75951C1.81309 1.75951 2.808 1.75552 2.95859 1.75552C2.95859 1.54617 2.96461 1.14741 2.95658 0.943051C2.95056 0.797504 2.99373 0.690836 3.12424 0.629028H3.24471C3.37523 0.690836 3.4184 0.797504 3.41237 0.943051C3.40434 1.12748 3.41036 1.5063 3.41036 1.69072C3.41036 1.71265 3.41338 1.73558 3.41438 1.75552C3.56698 1.75552 4.6161 1.75552 4.76769 1.75552C4.76769 1.54617 4.77372 1.14741 4.76569 0.943051C4.75966 0.797504 4.80283 0.690836 4.93334 0.629028H5.05382C5.18433 0.690836 5.2275 0.797504 5.22148 0.943051C5.21344 1.12748 5.21947 1.5063 5.21947 1.69072C5.21947 1.71265 5.22248 1.73558 5.22348 1.75552C5.37608 1.75552 6.36095 1.75951 6.4754 1.75951C6.82477 1.75951 7.04363 1.9878 7.04363 2.35067C7.04363 2.4693 7.04765 3.49211 7.04765 3.64962C7.07576 3.64962 7.09985 3.64962 7.12495 3.64962C7.32072 3.64962 7.74639 3.64863 7.94216 3.64962C8.07669 3.65062 8.17708 3.74931 8.17808 3.8809C8.18009 4.01449 8.07869 4.11617 7.94015 4.11717C7.79458 4.11816 7.4191 4.11717 7.27353 4.11717C7.19924 4.11717 7.12395 4.11717 7.04965 4.11717C7.04965 4.27866 7.04965 5.36628 7.04965 5.52279C7.26952 5.52279 7.71426 5.52279 7.93011 5.52279C8.07669 5.52279 8.17909 5.61949 8.17909 5.75606C8.17909 5.89264 8.07769 5.99033 7.93111 5.99033C7.73735 5.99033 7.31469 5.99033 7.12093 5.99033C7.09684 5.99033 7.07274 5.99233 7.04865 5.99332C7.04865 6.15083 7.04664 7.21054 7.04363 7.34811C7.03861 7.5764 6.89605 7.77877 6.68623 7.84755C6.62097 7.86948 5.37207 7.88444 5.21947 7.88444C5.21947 8.11472 5.21947 8.53441 5.21947 8.75971C5.21947 8.90426 5.12309 9.00894 4.99358 9.00894C4.86407 9.00894 4.7687 8.90426 4.76769 8.75971C4.76669 8.55634 4.76769 8.16058 4.76769 7.95721C4.76769 7.93229 4.76569 7.90737 4.76468 7.88244C4.61208 7.88244 3.56096 7.88444 3.41036 7.88444C3.41036 7.91833 3.41036 7.94724 3.41036 7.97515C3.41036 8.17852 3.41237 8.57429 3.41036 8.77766C3.40836 8.90027 3.31901 8.99697 3.20556 9.00794C3.09613 9.0189 2.99272 8.94214 2.96562 8.8265C2.95859 8.7966 2.95959 8.7647 2.95959 8.73379C2.95959 8.51547 2.95959 8.10475 2.95959 7.88344C2.80599 7.88344 1.81309 7.87846 1.69764 7.87846C1.35831 7.87846 1.13543 7.64817 1.13443 7.29826C1.13443 7.17664 1.13041 6.14585 1.13041 5.98934ZM4.09003 2.6946C3.49168 2.6946 2.89434 2.6946 2.29599 2.6946C2.12933 2.6946 2.03898 2.78731 2.03898 2.95877C2.03898 4.19692 2.03898 5.43506 2.03898 6.67321C2.03898 6.84966 2.12833 6.94137 2.3 6.94137C3.49369 6.94137 4.68738 6.94137 5.88006 6.94137C6.05174 6.94137 6.14109 6.84966 6.14109 6.67321C6.14109 5.43805 6.14109 4.2019 6.14109 2.96675C6.14109 2.78531 6.05374 2.6946 5.87605 2.6946C5.28071 2.6946 4.68537 2.6946 4.09003 2.6946Z" fill="white"/>
                                <path d="M2.49475 6.46784V3.16711H5.68227V6.46784H2.49475Z" fill="white"/>
                                <path d="M46.8599 28.4525C44.4374 30.4642 41.9346 31.6824 40.4648 31.6824C39.994 31.6824 39.6296 31.5568 39.4067 31.2936C39.4067 31.2936 32.0197 22.6575 30.9806 21.1741C33.5196 22.4571 39.4709 26.2663 40.8544 27.1994C39.7721 26.015 33.8519 20.7893 32.3781 19.4186C42.1846 21.226 46.8589 28.4525 46.8589 28.4525H46.8599Z" fill="white"/>
                                <path d="M38.2833 6.20364L33.7867 9.80343C33.5648 9.98088 33.2415 9.96294 33.0468 9.75658C31.9374 8.58523 30.5299 7.71294 28.9497 7.26932C28.6896 7.19655 28.519 6.95231 28.5471 6.68514L29.1806 0.826385C29.2157 0.505384 29.5219 0.28208 29.8392 0.350866C33.1943 1.0776 36.156 2.89594 38.3576 5.42507C38.5594 5.65734 38.5253 6.01124 38.2843 6.20364H38.2833Z" fill="white"/>
                                <path d="M27.7369 0.617079L27.1074 6.45291C27.0773 6.73204 26.8393 6.93939 26.5562 6.93939C26.5542 6.93939 26.5532 6.93939 26.5512 6.93939C24.8556 6.93939 23.2703 7.41691 21.914 8.24931C21.6801 8.39287 21.3749 8.33804 21.2022 8.1257L17.5308 3.60378C17.333 3.36054 17.3802 2.99966 17.6382 2.81922C20.1762 1.03976 23.2452 0 26.5512 0C26.7751 0 26.998 0.00498448 27.2188 0.0139565C27.5341 0.0279131 27.77 0.30505 27.7369 0.616082V0.617079Z" fill="white"/>
                                <path d="M20.0688 9.74272C18.9845 10.8822 18.1844 12.3067 17.7838 13.8958C17.7215 14.143 17.4886 14.3085 17.2336 14.2816L11.48 13.6685C11.1839 13.6366 10.9761 13.3614 11.0323 13.0714C11.6768 9.71879 13.3273 6.73708 15.6474 4.47213C15.8622 4.26278 16.2136 4.28471 16.4024 4.51699L20.1009 9.0728C20.2625 9.27218 20.2475 9.55729 20.0708 9.74272H20.0688Z" fill="white"/>
                                <path d="M18.5327 21.4293L13.9658 25.0859C13.7268 25.2773 13.3725 25.2185 13.2118 24.9603C11.6417 22.4401 10.7311 19.4455 10.7311 16.2315C10.7311 16.0162 10.7351 15.8008 10.7431 15.5865C10.7542 15.2944 11.0152 15.0731 11.3083 15.105L17.0388 15.7161C17.3009 15.744 17.4946 15.9653 17.4946 16.2265C17.4946 16.2285 17.4946 16.2295 17.4946 16.2315C17.4946 17.8883 17.9173 19.4435 18.6572 20.7903C18.7757 21.0066 18.7245 21.2758 18.5317 21.4303L18.5327 21.4293Z" fill="white"/>
                                <path d="M24.5574 25.7748L23.9239 31.6355C23.8898 31.9555 23.5835 32.1788 23.2673 32.11C19.9111 31.3833 16.9485 29.5659 14.7469 27.0348C14.5451 26.8026 14.5802 26.4506 14.8201 26.2582L19.3188 22.6565C19.5397 22.479 19.8629 22.498 20.0567 22.7033C21.1661 23.8757 22.5746 24.748 24.1558 25.1916C24.4148 25.2643 24.5865 25.5086 24.5574 25.7738V25.7748Z" fill="white"/>
                                <path d="M35.5736 28.8572C35.7714 29.1004 35.7232 29.4603 35.4662 29.6407C32.9282 31.4202 29.8572 32.461 26.5512 32.461C26.3273 32.461 26.1055 32.456 25.8836 32.447C25.5694 32.4341 25.3324 32.1559 25.3666 31.8459L25.996 26.0081C26.0261 25.7299 26.2641 25.5226 26.5462 25.5226C26.5482 25.5226 26.5492 25.5226 26.5512 25.5226C28.2469 25.5226 29.8341 25.0451 31.1904 24.2127C31.4243 24.0691 31.7285 24.1239 31.9002 24.3363L35.5726 28.8592L35.5736 28.8572Z" fill="white"/>
                                <path d="M26.5522 18.6968C27.8796 18.6968 28.9557 17.5926 28.9557 16.2305C28.9557 14.8684 27.8796 13.7642 26.5522 13.7642C25.2249 13.7642 24.1488 14.8684 24.1488 16.2305C24.1488 17.5926 25.2249 18.6968 26.5522 18.6968Z" fill="white"/>
                                <path d="M35.2826 18.7057C35.4944 17.9182 35.6078 17.0877 35.6078 16.2304C35.6078 14.5845 35.1912 13.0393 34.4603 11.6995C34.3338 11.4672 34.388 11.1781 34.5959 11.0117L39.1036 7.40289C39.3606 7.19753 39.7421 7.26034 39.9137 7.53947C40.7209 8.84939 41.5532 10.6348 42.015 12.7821C42.8553 16.688 39.0835 20.0096 35.2815 18.7047L35.2826 18.7057Z" fill="white"/>
                                <path d="M6.24351 38.9992C5.99052 39.6063 5.39317 40.0031 4.73057 40.0031H3.06001C2.15646 40.0031 1.42358 39.2753 1.42358 38.3781C1.42358 37.4809 2.15646 36.7532 3.06001 36.7532H4.73057C5.16528 36.7522 5.58191 36.9236 5.88811 37.2287C6.35595 37.6933 6.4965 38.3931 6.24351 39.0002V38.9992ZM5.15223 38.1718C5.15223 37.8378 4.87915 37.5676 4.54283 37.5666H3.25076C2.91444 37.5666 2.64237 37.8378 2.64137 38.1718V38.3771C2.64137 38.8247 3.0068 39.1876 3.45757 39.1876H4.33502C4.78579 39.1876 5.15122 38.8247 5.15122 38.3771V38.1718H5.15223Z" fill="white"/>
                                <path d="M11.6448 36.9739C11.7733 37.1015 11.8456 37.275 11.8456 37.4554V37.8861C11.8456 38.1512 11.7301 38.7952 10.4852 38.7952H8.11893V39.9795H6.94934V36.7755H11.1609C11.3426 36.7755 11.5173 36.8473 11.6458 36.9749L11.6448 36.9739ZM10.6519 37.7325C10.6519 37.6408 10.5766 37.567 10.4852 37.567H8.14202V37.899H10.4852C10.5776 37.899 10.6519 37.8252 10.6519 37.7335V37.7325Z" fill="white"/>
                                <path d="M17.0991 36.7516V37.566H15.2348V40.0025H14.018V37.566H12.1547V36.7516H17.0991Z" fill="white"/>
                                <path d="M17.5941 40.0025V36.7516H18.8119V40.0025H17.5941Z" fill="white"/>
                                <path d="M28.2439 37.5869V40.0034H27.0261V38.0914C27.0261 37.8023 26.7902 37.568 26.4991 37.568H24.5163V40.0044H23.2905V38.0924C23.2905 37.8033 23.0545 37.569 22.7634 37.569H20.7806V40.0054H19.5638V36.7535H23.4772C23.7342 36.7605 24.4922 36.8263 24.4922 37.3517V36.7535H27.4036C27.8674 36.7535 28.2439 37.1274 28.2449 37.5889L28.2439 37.5869Z" fill="white"/>
                                <path d="M28.9738 40.0025V36.7516H30.1915V40.0025H28.9738Z" fill="white"/>
                                <path d="M32.8881 39.188H35.5847V40.0025H30.6403V39.9566L31.8179 38.9059L33.3188 37.567H31.1211V36.7516H35.6188L32.8881 39.188Z" fill="white"/>
                                <path d="M37.3096 37.567V37.8591H41.0362V38.8182H36.0918V36.7516H41.0362V37.566H37.3096V37.567ZM36.0928 40.0025V39.188H41.0372V40.0025H36.0928Z" fill="white"/>
                                <path d="M46.5868 40.0024H45.2787L44.4625 38.8022H41.6213V37.8581H45.2024C45.2837 37.8581 45.349 37.7923 45.349 37.7126C45.349 37.6328 45.2827 37.567 45.2024 37.567H41.6213V36.7526H46.0527C46.3359 36.7526 46.5658 36.9809 46.5658 37.262V38.2938C46.5658 38.5749 46.3359 38.8032 46.0527 38.8032H45.7857L46.5858 40.0034L46.5868 40.0024Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2_23387">
                                    <rect width="46.86" height="40.0024" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <span className='w-px h-7 bg-zinc-800 hidden md:flex lg:flex'></span>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center space-x-6 text-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Support dropdown */}
                        <div
                            ref={supportRef}
                            className="relative"
                            onMouseEnter={handleSupportEnter}
                            onMouseLeave={handleSupportLeave}
                        >
                            <button className="flex items-center space-x-1 text-gray-200 hover:text-white transition-colors duration-200">
                                Support
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {supportOpen && (
                                <div className="absolute left-0 mt-7 w-xl bg-[#0c0c14] border border-gray-700 rounded-xs shadow-xl z-50 p-2">
                                    {supportLinks.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-start px-3 py-3 hover:bg-gray-800 rounded-md transition-colors duration-200"
                                        >
                                            <item.icon className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-gray-100 font-medium text-sm">{item.name}</p>
                                                <p className="text-gray-400 text-xs mt-1">{item.description}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side: Language + Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Language Dropdown */}
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="bg-[#0c0c14] flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-2xl text-white hover:bg-zinc-800 transition-colors duration-200"
                        >
                            <img
                                src={selectedLang.flag}
                                alt={selectedLang.name}
                                className="w-6 h-4 object-cover rounded shadow-sm"
                            />
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {langOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-[#0c0c14] border border-gray-700 rounded-2xl shadow-2xl py-2 z-50">
                                <div className="px-3 py-2 border-b border-gray-700">
                                    <h3 className="text-white font-semibold text-sm">Select Language</h3>
                                </div>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setSelectedLang(lang);
                                            setLangOpen(false);
                                        }}
                                        className={`flex items-center gap-3 px-3 py-3 w-full text-gray-300 hover:text-white hover:bg-blue-600/10 transition-all duration-200 ${
                                            selectedLang.code === lang.code ? 'bg-blue-600/20 text-white' : ''
                                        }`}
                                    >
                                        <img
                                            src={lang.flag}
                                            alt={lang.name}
                                            className="w-6 h-4 object-cover rounded shadow-sm"
                                        />
                                        <span className="font-medium text-sm">{lang.name}</span>
                                        {selectedLang.code === lang.code && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Discord Button */}
                    <a
                        href="#"
                        className="p-2 text-white hover:text-blue-400 transition-colors duration-200 hover:bg-white/5 rounded-lg"
                        title="Join our Discord"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3171 4.36995C18.7871 3.66795 17.1471 3.15095 15.4321 2.85495C15.4011 2.84895 15.3701 2.86395 15.3531 2.89195C15.1421 3.26695 14.9081 3.75695 14.7451 4.14095C12.9001 3.86495 11.0651 3.86495 9.25809 4.14095C9.09509 3.74795 8.85209 3.26695 8.64109 2.89195C8.62409 2.86395 8.59309 2.84995 8.56209 2.85495C6.84809 3.14995 5.20809 3.66695 3.67709 4.36995C3.66409 4.37495 3.65209 4.38495 3.64509 4.39695C0.534087 9.04495 -0.318913 13.5789 0.0990873 18.0569C0.101087 18.0789 0.113087 18.0999 0.130087 18.1129C2.18309 19.6209 4.17109 20.5359 6.12309 21.1419C6.15409 21.1519 6.18709 21.1399 6.20709 21.1139C6.66909 20.4839 7.08009 19.8189 7.43309 19.1199C7.45409 19.0789 7.43409 19.0299 7.39109 19.0139C6.73809 18.7659 6.11709 18.4639 5.51909 18.1219C5.47209 18.0939 5.46809 18.0269 5.51109 17.9939C5.63709 17.8999 5.76309 17.8019 5.88309 17.7029C5.90509 17.6849 5.93509 17.6809 5.96109 17.6929C9.88909 19.4859 14.1411 19.4859 18.0221 17.6929C18.0481 17.6809 18.0781 17.6839 18.1011 17.7029C18.2211 17.8019 18.3471 17.9009 18.4741 17.9949C18.5181 18.0269 18.5151 18.0949 18.4671 18.1229C17.8691 18.4719 17.2481 18.7679 16.5941 19.0139C16.5511 19.0299 16.5331 19.0799 16.5531 19.1209C16.9131 19.8189 17.3251 20.4839 17.7781 21.1139C17.7971 21.1409 17.8311 21.1519 17.8621 21.1429C19.8231 20.5359 21.8121 19.6209 23.8641 18.1139C23.8821 18.1009 23.8931 18.0809 23.8951 18.0589C24.3951 12.8819 23.0571 8.38495 20.3471 4.39895C20.3421 4.38495 20.3301 4.37495 20.3171 4.36995ZM8.02009 15.3309C6.83709 15.3309 5.86309 14.2449 5.86309 12.9119C5.86309 11.5789 6.81809 10.4929 8.02009 10.4929C9.23109 10.4929 10.1961 11.5879 10.1771 12.9119C10.1771 14.2459 9.22109 15.3309 8.02009 15.3309ZM15.9951 15.3309C14.8131 15.3309 13.8381 14.2449 13.8381 12.9119C13.8381 11.5789 14.7931 10.4929 15.9951 10.4929C17.2061 10.4929 18.1711 11.5879 18.1521 12.9119C18.1521 14.2459 17.2061 15.3309 15.9951 15.3309Z" fill="currentColor"/>
                        </svg>
                    </a>

                    <div className='w-px h-7 bg-zinc-800'></div>

                    <Button
                        variant="outline"
                        className="bg-[#1E1E24] border-gray-700 text-white hover:bg-zinc-800 hover:text-white md:text-xs  px-5 py-3 font-medium rounded-xl transition-all duration-200 hover:border-gray-600"
                    >
                        Log in / Sign up
                    </Button>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 md:text-xs font-medium flex items-center gap-2 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25">
                        Download Free
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.37592 12.7491C8.84037 14.2136 11.2147 14.2136 12.6792 12.7492L15.356 10.0724C15.8525 9.59284 15.8663 8.80151 15.3867 8.30495C14.9071 7.80838 14.1157 7.79463 13.6192 8.27424C13.6087 8.28428 13.5985 8.29456 13.5885 8.30495L11.2693 10.6233L11.2501 1.25C11.2501 0.559648 10.6904 0 10.0001 0C9.30975 0 8.7501 0.559648 8.7501 1.25L8.7676 10.6049L6.46678 8.30413C5.97021 7.82452 5.17889 7.83827 4.69928 8.33483C4.23143 8.81924 4.23143 9.58721 4.69928 10.0716L7.37592 12.7491Z" fill="white"/>
                            <path d="M18.75 10.0825C18.0596 10.0825 17.5 10.6422 17.5 11.3325V15.1583C17.4995 15.3464 17.3472 15.4987 17.1592 15.4992H2.84082C2.65277 15.4987 2.50043 15.3464 2.5 15.1583V11.3325C2.5 10.6422 1.94035 10.0825 1.25 10.0825C0.559648 10.0825 0 10.6422 0 11.3325V15.1583C0.00183594 16.7265 1.27266 17.9974 2.84082 17.9992H17.1591C18.7273 17.9974 19.9981 16.7265 20 15.1584V11.3326C20 10.6422 19.4404 10.0825 18.75 10.0825Z" fill="white"/>
                        </svg>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#0c0c14] border-t border-gray-800 px-4 py-4">
                    <div className="space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-white hover:text-blue-400 transition-colors duration-200 font-medium py-2"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Mobile Support Links */}
                        <div className="pt-2 border-t border-gray-800">
                            <p className="text-gray-400 font-medium mb-3">Support</p>
                            <div className="space-y-2">
                                {supportLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-2"
                                    >
                                        <item.icon className="w-5 h-5 text-blue-400 mr-3" />
                                        <span>{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}