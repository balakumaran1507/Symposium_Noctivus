import React, { useState } from "react";
import { IoWarningOutline, IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Aurora from "./../components/Aurora"; // Direct import ✅

const CodeOfConduct = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleAgreeChange = () => setAgreed(!agreed);
  const handleRegisterClick = () => {
    if (agreed) navigate("/register");
  };

  return (
    <section className="relative w-full h-screen bg-black text-white font-funnel">
      {/* Aurora Background */}
      <div className="absolute opacity-40 inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#00FFFF"]}
          blend={20}
          amplitude={1.2}
          speed={0.7}
        />
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-20 px-10 md:px-20 lg:px-40 pt-20 pb-4 backdrop-blur-3xl">
        <h1 className="text-sm text-center mb-6">CODE OF CONDUCT</h1>
        <hr className="border-0.5 border-white/20 w-full" />
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-10 left-10 z-30 flex items-center gap-2 p-3 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-all duration-300"
      >
        <IoArrowBackOutline className="text-sm" />
      </button>

      {/* Scrollable Content */}
      <div className="relative z-10 px-10 md:px-20 lg:px-40 pt-[160px] pb-20 h-full scrollbar-hide overflow-y-auto">
        <div className="space-y-10 text-white/60 leading-7 text-md md:text-sm">
          <ul className="list-disc ml-6 mt-6 space-y-6">
            <li>
              <strong>Dress Code:</strong> Participants must wear appropriate
              formal or semi-formal attire during the event. Only casual or
              formal shirts are permitted; T-shirts, graphic tops, or hoodies
              are strictly not allowed.
            </li>
            <li>
              <strong>Photography:</strong> Photography and videography are
              permitted only for personal use and must be limited to yourself or
              individuals you personally know.
            </li>
            <li>
              <strong>ID Requirement:</strong> All attendees must carry their
              official college identification card and be prepared to present it
              upon request.
            </li>
            <li>
              <strong>Conduct:</strong> All participants must conduct themselves
              with utmost professionalism. Harassment or disruption will lead to
              disciplinary action.
            </li>
          </ul>

          {/* Warning */}
          <div className="flex flex-col md:flex-row items-center gap-2 bg-red-900 w-fit py-3 lg:py-1 px-2 mt-10 md:mt-20 rounded-md mx-auto text-white text-sm md:text-base text-center md:text-left">
            <IoWarningOutline className="text-[20px] md:text-[20px]" />
            <p className="text-sm">
              Violations may result in warnings, disqualification, or removal
              from the event.
            </p>
          </div>

          {/* Signature */}
          <div className="text-center text-white mt-10 text-sm">
            Break Limits. Not Trust!
          </div>

          {/* Checkbox + Button */}
          <div className="my-10 flex flex-col items-center justify-center gap-6">
            <label className="flex gap-3 text-white/80 text-sm items-center text-left leading-snug max-w-xs sm:max-w-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleAgreeChange}
                className="accent-emerald-500 w-6 h-6 md:h-4 md:w-4 mt-[2px]"
              />
              <span className="leading-relaxed">
                I have read and agree to fully comply with the Code of Conduct.
              </span>
            </label>

            <button
              onClick={handleRegisterClick}
              disabled={!agreed}
              className={`px-5 py-2 rounded-full text-white font-funnel text-md transition-all duration-300 ${
                agreed
                  ? "bg-emerald-500 hover:bg-emerald-700 cursor-pointer"
                  : "bg-white/30 cursor-not-allowed opacity-50"
              }`}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
