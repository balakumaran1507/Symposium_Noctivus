import SpotlightCard from "../components/SpotlightCard";
import { VscTools } from "react-icons/vsc";

const Workshop = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="px-10 sm:px-10 md:px-20 lg:px-32 font-funnel text-white"
    >
      <p className="text-md font-funnel text-center pt-20 pb-10">WORKSHOP</p>
      <hr className="border-0.5 border-white/20 w-full mb-10" />

      {/* Workshop 1 - Image Left */}
      <SpotlightCard
        className="w-full transition-transform hover:scale-[1.02] mb-16"
        spotlightColor="rgba(0, 150, 255, 0.2)"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Image (standardized) */}
          <img
            src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-122642,resizemode-75,msid-105921572/news/india/india-usa-taiwan-launch-workshop-on-cyber-security-ahead-of-polls-in-3countries-in-2024.jpg"
            alt="Workshop"
            className="w-full md:w-1/3 h-52 md:h-60 object-cover rounded-xl border border-white/20"
          />

          {/* Right Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-4 px-4 pb-4 lg:pb-0">
            <div className="flex items-center gap-3 justify-start md:justify-start">
              <h3 className="text-lg sm:text-xl flex flex-row items-center gap-3 font-medium text-white">
                <div className="bg-white/20 flex items-center justify-center w-10 lg:w-12 aspect-square rounded-full shrink-0">
                  <VscTools className="text-white text-lg lg:text-xl" />
                </div>
                The Art of Hacking
              </h3>
            </div>
            <p className="text-white/60 text-left text-md">
              Conducted by:{" "}
              <span className="text-white">
                Sriram Kesavan, Founder & Director of Security at TG Cyberlabs
              </span>
            </p>
            <p className="text-white/70 text-left text-md leading-relaxed">
              The Art of Hacking is a hands-on workshop that dives deep into the
              mindset, techniques, and real-world tactics used by ethical
              hackers.
            </p>
          </div>
        </div>
      </SpotlightCard>

      {/* Workshop 2 - Image Right */}
      <SpotlightCard
        className="w-full transition-transform hover:scale-[1.02]"
        spotlightColor="rgba(0, 150, 255, 0.2)"
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Right Image (same style) */}
          <img
            src="/esp.jpeg"
            alt="Workshop"
            className="w-full md:w-1/3 h-52 md:h-60 object-cover rounded-xl border border-white/20"
          />

          {/* Left Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-4 px-4 pb-4 lg:pb-0">
            <div className="flex items-center gap-3 justify-start md:justify-start">
              <h3 className="text-lg sm:text-xl flex flex-row items-center gap-3 font-medium text-white">
                <div className="bg-white/20 flex items-center justify-center w-10 lg:w-12 aspect-square rounded-full shrink-0">
                  <VscTools className="text-white text-lg lg:text-xl" />
                </div>
                Tools Expo
              </h3>
            </div>
            <p className="text-white/60 text-left text-md">
              Conducted by:{" "}
              <span className="text-white">
                Sneha Varadhan, Lead Security Engineer at SecureX
              </span>
            </p>
            <p className="text-white/70 text-left text-md leading-relaxed">
              Dive into the world of electronics and embedded systems at our Tools Expo,
              featuring innovative tools like ESP modules, ATtiny85 microcontrollers, NFC
              cloners, PN532 readers, and more. This session offers a glimpse into real-world
              DIY projects and prototyping setups, perfect for tech enthusiasts, students,
              and makers. Explore automation, IoT, and wireless communication demos in action.
            </p>

          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default Workshop;
