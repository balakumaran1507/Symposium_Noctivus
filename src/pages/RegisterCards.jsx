import React, { lazy, Suspense } from "react";
import SpotlightCard from "../components/SpotlightCard";
import { LuBug } from "react-icons/lu";
import { IoFlagOutline } from "react-icons/io5";
import { BsNut } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Aurora = lazy(() => import("../components/Aurora"));

const RegisterCards = () => {
  const navigate = useNavigate();

  const events = [
    {
      name: "Bug Bounty",
      icon: <LuBug size={22} className="text-white/80" />,
      description:
        "Hunt down software flaws, exploit vulnerabilities, and prove your hacking chops. A thrilling ride for code sleuths!",
      link: "https://forms.gle/w6ZjGgxvsBNmQftDA",
    },
    {
      name: "Capture the Flag",
      icon: <IoFlagOutline size={22} className="text-white/80" />,
      description:
        "Dive into logical puzzles and real-world cyber scenarios. Perfect for security nerds and puzzle lovers alike.",
      link: "https://forms.gle/XkjNdYmh77vT6U9P8",
    },
    {
      name: "Workshop",
      icon: <BsNut size={22} className="text-white/80" />,
      description:
        "Learn directly from industry pros and level up your tech game. Hands-on, high-impact, highly awesome.",
      link: "https://forms.gle/x6HmJ27bLMQHcfkC9",
    },
    {
      name: "Tech & Non-Tech Events",
      icon: <IoCodeSlashOutline size={22} className="text-white/80" />,
      description:
        "From epic coding battles to wild gaming tournaments — there’s something for everyone to flex their skills or just have fun.",
      link: "https://forms.gle/RhyVE1Sb9XncoYt96",
    },
    {
      name: "E-Sports",
      icon: <IoCodeSlashOutline size={22} className="text-white/80" />,
      description:
        "Register now for our online eSports event!",
      link: "https://forms.gle/7zBTR2zK7pAAdbjKA",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-funnel overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute opacity-40 inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <Aurora
            colorStops={["#3A29FF", "#00FFFF"]}
            blend={20}
            amplitude={2}
            speed={0.7}
          />
        </Suspense>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-10 left-10 z-30 flex items-center gap-2 p-3 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-all duration-300"
      >
        <IoArrowBackOutline className="text-sm" />
      </button>

      {/* Fixed Heading (Navbar Style) */}
      <div className="fixed top-0 left-0 w-full z-20 px-10 md:px-20 lg:px-40 pt-20 pb-4 backdrop-blur-3xl">
        <h2 className="text-sm text-center mb-6">REGISTER EVENTS</h2>
        <hr className="border-0.5 border-white/20 w-full" />
      </div>

      {/* Content Section */}
      <section className="relative z-10 px-20 md:px-40 lg:px-40 pt-[160px] pb-16">
        {/* Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(80, 200, 130, 0.4)"
              className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    {event.icon}
                  </div>
                  <h3 className="text-white text-sm">{event.name}</h3>
                </div>
                <p className="text-white/60 text-sm">{event.description}</p>
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
        <div className="text-white text-sm mt-12 w-full space-y-4 leading-relaxed">
          <p className="text-left mb-2">Note:</p>
          <ul className="list-disc list-inside text-white/60 space-y-3">
            <li>
              <strong>fees are non-refundable under any circumstances.</strong>
            </li>
            <li>
              <strong>All tech event participants must bring their own devices to ensure
              smooth and uninterrupted participation.</strong>
            </li>
            <li>
              Participants can register for only one event from the above list.
            </li>
            <li>
              If not attending the CTF or Bug Bounty, participants may register
              for any two of the remaining events.
            </li>
            <li>
              Participants Registered for CTF or Bug Bounty, will not be
              eligible to participate in any other events.
            </li>
            <li>
              Registration must be done individually. For team-based events,
              Participants can form teams at the venue on the event day.
            </li>
            <li>
              Participants who register for the Workshop will not be eligible
              for any other event.
            </li>
            <li>
              Food will be provided for all registered participants with both
              Veg & Non-Veg options available.
            </li>
            <li>A Tools Expo will be Available during the Event.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RegisterCards;
