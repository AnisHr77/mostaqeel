import { Download, Play, Settings, Zap, Wifi, Cpu, ExternalLink, Rocket, TrendingUp, Sliders, Server, Pause, Activity } from "lucide-react";

const MOCKUP_IMAGE_URL = "https://i.imgur.com/12ScT1Q.png";

const Complex = () => {
    const featuresList = [
        // 1. FPS Boost Engine - أعلى يسار
        {
            icon: Cpu,
            title: "FPS Boost Engine",
            text: "Maximizes frame rates by reallocating system resources and stopping non-essential background tasks.",
            visual: (
                <div className="relative w-32 h-24 flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                        <Pause size={20} className="text-white" />
                    </div>
                    <div className="relative">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
                            <Wifi size={28} className="text-blue-400" />
                        </div>
                        <div className="absolute inset-0 border border-blue-600/40 rounded-full animate-ping"></div>
                        <div className="absolute inset-2 border border-blue-600/30 rounded-full animate-ping animation-delay-300"></div>
                    </div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        0ms <TrendingUp size={10} className="text-green-400" />
                    </div>
                </div>
            )
        },

        // 2. Real-Time System Clean-Up - أعلى يمين
        {
            icon: Settings,
            title: "Real-Time System Clean-Up",
            text: "Frees up RAM and CPU by disabling unnecessary processes while you play – no manual setup.",
            visual: (
                <div className="relative w-56 p-4 bg-[#161633] rounded-2xl border border-gray-700/50 shadow-xl">
                    <div className="absolute -top-3 -right-3 p-2 bg-blue-600/40 rounded-full backdrop-blur-sm">
                        <Activity size={20} className="text-blue-300" />
                    </div>
                    <p className="text-gray-400 text-xs mb-1">12:45 PM</p>
                    <p className="text-gray-500 text-[10px]">{'// Freeing RAM & CPU..'}</p>
                    <p className="text-gray-500 text-[10px] mb-2">Unnecessary processes disabled</p>
                    <div className="flex justify-between items-center text-white text-xs">
                        <span className="flex items-center gap-1">
                            <Server size={12} className="text-gray-400" /> 7 Background Tasks Killed
                        </span>
                        <span className="flex items-center gap-1">
                            <TrendingUp size={10} className="text-green-400" /> +18%
                        </span>
                        <span>1.3 GB</span>
                    </div>
                </div>
            )
        },

        // 3. Network Optimizer - أسفل يسار
        {
            icon: Wifi,
            title: "Network Optimizer",
            text: "Prioritizes gaming traffic and stabilizes your connection for lower ping and fewer lag spikes.",
            visual: (
                <div className="relative w-40 h-24 flex flex-col items-center justify-end">
                    <div className="flex gap-1 mb-3">
                        <div className="w-3 h-6 bg-blue-600/70 rounded-full"></div>
                        <div className="w-3 h-9 bg-blue-600/70 rounded-full"></div>
                        <div className="w-3 h-12 bg-blue-600/70 rounded-full"></div>
                        <div className="w-3 h-16 bg-blue-600 rounded-full"></div>
                        <div className="w-3 h-10 bg-gray-700/40 rounded-full"></div>
                    </div>
                    <p className="text-white text-lg font-bold">Up to 40%</p>
                    <Rocket size={24} className="absolute top-0 right-0 text-blue-500 -rotate-12" />
                </div>
            )
        },

        // 4. Windows Tuning - أسفل يمين
        {
            icon: Zap,
            title: "Windows Tuning",
            text: "Adjusts Windows settings that typically bottleneck performance – from power plans to visual effects.",
            visual: (
                <div className="relative w-40 h-24 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 120 60">
                        <path
                            d="M 10 50 Q 40 10 60 50 T 110 10"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                            className="drop-shadow-glow"
                        />
                        <rect x="95" y="35" width="12" height="18" rx="3" fill="#3b82f6" />
                        <rect x="107" y="45" width="12" height="8" rx="2" fill="#3b82f6" />
                    </svg>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center shadow-md">
                        <div className="grid grid-cols-2 gap-px">
                            <div className="w-3 h-3 bg-white"></div>
                            <div className="w-3 h-3 bg-white"></div>
                            <div className="w-3 h-3 bg-white"></div>
                            <div className="w-3 h-3 bg-white"></div>
                        </div>
                    </div>
                    <Sliders size={24} className="absolute top-1 left-1 text-white/80" />
                </div>
            )
        },
    ];

    return (
        <section className="relative min-h-screen bg-[#0f0f2e] overflow-hidden">
            <div className="relative z-10 container mx-auto px-6 py-20">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="text-left">
                        <h1 className="text-4xl font-bold text-white mb-8 leading-tight">
                            <span className="text-white">No complex settings,</span>
                            <br />
                            <span className="text-white">No confusing menus,</span>
                            <br />
                            <span className="text-white">
                                Just Results.
                            </span>
                        </h1>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center w-[185px] h-[64px] gap-2 text-lg font-semibold text-white bg-blue-600 rounded-[16px] hover:bg-blue-700 transition"
                        >
                            How it works ? <ExternalLink size={18} />
                        </a>
                    </div>
                    <div>
                        <img
                            src={MOCKUP_IMAGE_URL}
                            alt="IQ Optimizer Mockup"
                            className="w-full max-w-lg h-auto rounded-xl shadow-2xl"
                        />
                    </div>
                </div>

                {/* Features Section - مطابق للصورة تمامًا */}
                <h2 className="text-center text-4xl md:text-6xl font-bold text-white mt-70 mb-16 leading-snug">
                    What IQ Optimizer <br /> Actually Does.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {featuresList.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-6 max-w-md">
                                {/* Visual */}
                                <div className={idx >= 2 ? "order-2 md:order-1" : ""}>
                                    {feature.visual}
                                </div>

                                {/* Text */}
                                <div className={`text-left ${idx >= 2 ? "md:text-left" : "md:text-right"} flex-1`}>
                                    <h4 className="text-lg font-extrabold text-white mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* تأثيرات خلفية خفية */}
            <style jsx>{`
                @keyframes ping {
                    75%, 100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
                .animate-ping {
                    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                .drop-shadow-glow {
                    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
                }
            `}</style>
        </section>
    );
};

export default Complex;


