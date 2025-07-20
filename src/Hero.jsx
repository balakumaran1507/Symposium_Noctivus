import React, { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Aurora from "./components/Aurora";

const Countdown = lazy(() => import("./Countdown"));
const ShinyText = lazy(() => import("./components/ShinyText"));

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full select-none h-screen bg-black overflow-hidden">
      {/* Aurora Background (non-lazy) */}
      <Aurora
        colorStops={["#3A29FF", "#00FFFF"]}
        blend={20}
        amplitude={1.2}
        speed={0.7}
      />

      {/* Logo */}
      <img
        src="/Logo.webp"
        alt="Noctivus Logo"
        className="absolute left-1/2 transform -translate-x-1/2 top-30 md:top-0 w-[360px] max-w-full z-50 mx-auto mix-blend-screen"
      />

      {/* Title */}
      <div className="absolute top-105 md:top-72 w-full text-center text-white text-3xl md:text-3xl font-funnel">
        Noctivus '25
      </div>

      {/* Countdown - Lazy Loaded */}
      <div className="absolute top-120 md:top-85 left-1/2 transform -translate-x-1/2">
        <Countdown />
      </div>

      {/* Register Button with Lazy-loaded ShinyText */}
      <button
        onClick={() => navigate("/codeofconduct")}
        className="absolute top-145 md:top-107 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full bg-white/2 border border-white/20 hover:bg-white/5 pt-3 text-white font-funnel leading-none"
      >
        <Suspense fallback={<span className="text-white">Loading...</span>}>
          <ShinyText
            text="REGISTER NOW"
            disabled={false}
            speed={5}
            className="text-sm"
          />
        </Suspense>
      </button>
    </div>
  );
};

export default Hero;
