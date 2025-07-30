import { FiCalendar, FiMapPin, FiMail } from "react-icons/fi";

const About = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="px-10 lg:px-32 py-10 relative overflow-hidden bg-transparent"
    >
      <div className="mx-auto flex flex-col items-center">
        <div className="font-funnel text-blue-50 w-full flex flex-col items-center overflow-hidden">
          <p className="pb-10 text-sm">NOCTIVUS UNVEILED</p>

          <hr className="border-0.5 border-white/20 w-full" />

          <p className="text-sm pt-10 text-white/50 leading-7 text-left">
            Noctivus is a national-level symposium by the Department of CSE
            (Cyber Security), Velammal Engineering College. It brings together
            tech enthusiasts to explore innovations, compete in exciting events,
            and dive into the world of cyber security. From hands-on workshops
            to thrilling technical and non-technical contests, Noctivus is where
            ideas ignite and futures begin. Join us to connect, create, and lead
            the digital revolution.
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-6 mt-14 text-white/60 text-sm px-14 text-center md:text-left">
            <div className="flex items-center gap-2 w-full md:w-auto justify-left">
              <FiCalendar className="text-emerald-400" />
              <span>August 02, 2025</span>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto justify-left">
              <FiMapPin className="text-emerald-400" />
              <span>Velammal Engineering College</span>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto justify-left">
              <FiMail className="text-emerald-400" />
              <span>noctivus.root@gmail.com</span>
            </div>
          </div>

          {/* Sponsored by Section */}
          <div className="mt-20 flex flex-col items-centre gap-5 text-xs md:text-sm z-10">
            <p className="mb-2 text-center">SPONSORED BY</p>
            <div className="flex flex-row gap-5">
              <img
                src="/CH_Logo.jpg"
                alt="Sponsor Logo"
                className="h-24 md:h-20 object-contain mix-blend-screen opacity-90"
              />
              <img
                src="/CL_Logo.jpg"
                alt="Sponsor Logo"
                className="h-24 md:h-20 object-contain mix-blend-screen opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
