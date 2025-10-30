import { Download } from "lucide-react";
import image1 from "../assets/image1.png";

export default function Home() {
    return (
        <section className="min-h-screen bg-[#0c0c14] text-white flex flex-col items-center justify-center text-center px-6 pt-24">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">

                <div className="text-left md:w-1/3">
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className={'flex'}>LAG ?<svg  width="35" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_22975)">
        <path d="M27.9999 38C27.9999 40.2 26.1999 42 23.9999 42C21.7999 42 19.9999 40.2 19.9999 38C19.9999 35.8 21.7999 34 23.9999 34C26.1999 34 27.9999 35.8 27.9999 38ZM47.4599 16.24C43.3999 11.86 38.2399 8.72 32.5199 7.14C31.4599 6.84 30.3599 7.48 30.0599 8.54C29.7599 9.6 30.3999 10.7 31.4599 11C36.4599 12.38 40.9799 15.14 44.5199 18.96C44.9199 19.38 45.4399 19.6 45.9799 19.6C46.4599 19.6 46.9599 19.42 47.3399 19.06C48.1399 18.3 48.1999 17.04 47.4399 16.24H47.4599ZM15.4599 7.16C9.73993 8.74 4.57994 11.88 0.519936 16.26C-0.240064 17.06 -0.180064 18.34 0.619936 19.08C0.999936 19.44 1.49994 19.62 1.97994 19.62C2.51994 19.62 3.05994 19.4 3.43994 18.98C6.99994 15.16 11.4999 12.4 16.4999 11.02C17.5599 10.72 18.1799 9.62 17.8999 8.56C17.5999 7.5 16.4999 6.86 15.4399 7.16H15.4599ZM32.9799 22.36C32.0199 21.82 30.7999 22.16 30.2599 23.12C29.7199 24.08 30.0599 25.3 31.0199 25.84C32.3199 26.58 33.4999 27.5 34.5199 28.6C34.9199 29.02 35.4399 29.24 35.9799 29.24C36.4599 29.24 36.9599 29.06 37.3399 28.7C38.1399 27.94 38.1999 26.68 37.4399 25.88C36.1399 24.48 34.6399 23.3 32.9799 22.36ZM15.0199 22.36C13.3599 23.3 11.8599 24.48 10.5599 25.88C9.79994 26.68 9.85993 27.96 10.6599 28.7C11.0399 29.06 11.5399 29.24 12.0199 29.24C12.5599 29.24 13.0999 29.02 13.4799 28.6C14.4999 27.5 15.6799 26.58 16.9799 25.84C17.9399 25.3 18.2799 24.08 17.7399 23.12C17.1999 22.16 15.9799 21.82 15.0199 22.36ZM23.9999 30.02C25.0999 30.02 25.9999 29.12 25.9999 28.02V8C25.9999 6.9 25.0999 6 23.9999 6C22.8999 6 21.9999 6.9 21.9999 8V28C21.9999 29.1 22.8999 30 23.9999 30V30.02Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_22975">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
</span> <br /> STUTTER ?
                    </h3>
                </div>

                {/* Center video/image */}
                <div className="md:w-1/3 flex justify-center">
                    <div className="rounded-xl overflow-hidden   ">
                        <img
                            src={image1}
                            alt="Gameplay comparison"
                            className="w-[440px] md:w-[400px] object-cover"
                        />
                    </div>
                </div>

                {/* Right text */}
                <div className="text-right md:w-1/3">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        OR LOW <br /> FPS ?
                    </h1>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 max-w-2xl mt-10 mb-8 text-center">
                Built for gamers who want smoother, faster gameplay. IQ Optimizer boosts
                FPS and fine-tunes your system, no upgrades needed.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition">
                    <Download size={18} />
                    Download Free
                </button>
                <button className="border border-gray-600 hover:bg-gray-700 px-6 py-3 rounded-md font-medium transition">
                    Compare Plans
                </button>
            </div>

            {/* Footer note */}
            <p className="text-gray-500 mt-8 text-sm flex items-center gap-2">
                <span>🪟</span> Supports Windows 10 and Higher
            </p>
        </section>
    );
}
