import React, { lazy, Suspense } from "react";
import SpotlightCard from "../components/SpotlightCard";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Aurora = lazy(() => import("../components/Aurora"));

const RegisterCards = () => {
  const navigate = useNavigate();

  const events = [
    {
      name:"Bug Bounty",
      description:"Hunt down vulnerabilities, patch up chaos — unleash your inner hacker.",
      link:"https://forms.gle/w6ZjGgxvsBNmQftDA"

    },
    {
      name: "Capture the Flag",
      description:
        "Test your cybersecurity skills with logic-based challenges.",
      link: "https://forms.gle/XkjNdYmh77vT6U9P8",
    },
    {
      name: "Workshop",
      description: "Boost your tech skills with expert-led sessions.",
      link: "https://forms.gle/x6HmJ27bLMQHcfkC9",
    },
    {
      name: "Tech & Non-Tech Events",
      description: "From coding to E-sports — there’s something for all.",
      link: "https://forms.gle/RhyVE1Sb9XncoYt96",
    },
    
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-funnel overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <Aurora
            colorStops={["#3A29FF", "#00FFFF"]}
            blend={20}
            amplitude={2}
            speed={0.7}
          />
        </Suspense>
      </div>

      {/* Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Back Button */}
      <button
        onClick={() => {
          console.log("Back clicked");
          navigate("/");
        }}
        className="top-10 left-10 z-50 fixed pointer-events-auto flex items-center gap-2 p-3 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-all duration-300"
      >
        <IoArrowBackOutline className="text-lg" />
      </button>

      {/* Foreground Content */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 py-16 min-h-screen">
        <h2 className="text-xl md:text-xl mb-12 text-center text-white/90">
          Register for Your Event
        </h2>
        

        <div className="grid gap-10 w-full max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {events.map((event, index) => (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(0, 150, 255, 0.3)"
              className="custom-spotlight-card p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 min-w-s"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <FaRegCalendarCheck size={22} className="text-white/80" />
                  </div>
                  <h3 className="text-white text-lg md:text-lg font-semibold">
                    {event.name}
                  </h3>
                </div>
                <p className="text-white/60 text-sm md:text-base leading-6">
                  {event.description}
                </p>
              </div>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 self-end px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-300 text-sm text-center"
              >
                Register
              </a>
            </SpotlightCard>
          ))}
        </div>
                {/* Rules Section */}
        <div className="text-white/80 text-base md:text-lg mt-12 max-w-2xl space-y-4 leading-relaxed">
          <p className="text-white text-lg font-semibold text-left mb-2">
            Note:
          </p>
          <ul className="list-decimal list-inside space-y-3 pl-2">
            <li>
              All tech event participants must bring their own devices to ensure
              smooth and uninterrupted participation.
            </li>
            <li>
              Participants can register for only one event from the above list.
            </li>
            <li>
              If not attending the CTF, participants may register for any two of
              the remaining technical events.
            </li>
            <li>
              Registration must be done individually. For events that allow team
              participation, participants can form teams at the venue on the day
              of the event.
            </li>
            <li>
              Participants who register for the workshop will not be eligible to
              participate in any other event.
            </li>
            <li>
              Food will be provided for all registered participants, with both
              Veg and Non-Veg options available.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RegisterCards;
