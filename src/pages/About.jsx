import "aos/dist/aos.css";
import { FiCalendar, FiMapPin, FiMail } from "react-icons/fi";

const About = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="px-10 lg:px-32 py-10"
    >
      <div className="mx-auto flex flex-col items-center">
        <div className="font-funnel text-blue-50 w-full flex flex-col items-center overflow-hidden">
          <p className="pb-10 text-md">NOCTIVUS UNVEILED</p>

          <hr className="border-0.5 border-white/20 w-full" />

          <p className="text-md pt-10 text-white/50 leading-7 text-left">
            Noctivus is a national-level symposium by the Department of CSE
            (Cyber Security), Velammal Engineering College. It brings together
            tech enthusiasts to explore innovations, compete in exciting events,
            and dive into the world of cyber security. From hands-on workshops
            to thrilling technical and non-technical contests, Noctivus is where
            ideas ignite and futures begin. Join us to connect, create, and lead
            the digital revolution.
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 mt-20 text-white/60 text-md lg:px-40">
            <div className="flex items-center gap-2 bg-white/5 p-2 px-4 rounded-md border border-white/20 w-full md:w-auto justify-center">
              <FiCalendar className="text-emerald-400" />
              <span>August 02, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-2 px-4 rounded-md border border-white/20 w-full md:w-auto justify-center">
              <FiMapPin className="text-emerald-400" />
              <span>Velammal Engineering College</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-2 px-4 rounded-md border border-white/20 w-full md:w-auto justify-center">
              <FiMail className="text-emerald-400" />
              <span>noctivus.root@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
