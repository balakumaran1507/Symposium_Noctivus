import SpotlightCard from "../components/SpotlightCard";
import { FaRegUser } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

const coordinators = {
  staff: [
    {
      name: "Ms. Akshaya Dharani K",
      email: "admin@noctivus.pro",
      designation: "Asst. Professor, Dept of CSE (CS)",
    },
    {
      name: "Mrs. Parveenbanu M",
      email: "support@noctivus.pro",
      designation: "Asst. Professor, Dept of CSE (CS)",
    },
  ],
  students: [
    { name: "Abilash B", phone: "+91 72004 67850" },
    { name: "Kartheek Kareti", phone: "+91 94455 27120" },
    { name: "Roshath S", phone: "+91 81228 65936" },
    { name: "Adarsh A G", phone: "+91 98849 47054" },
    { name: "Balakumaran", phone: "+91 76958 27158" },
    { name: "Uppala Vishnu Varthan", phone: "+91 99083 80546" },
  ],
};

const Coordinators = ({ refProp }) => {
  const tech = coordinators.students.slice(0, 2);
  const nonTech = coordinators.students.slice(2, 4);
  const registration = coordinators.students.slice(4, 6);

  return (
    <section
      ref={refProp}
      className="min-h-screen px-10 md:px-20 lg:px-32 text-white py-10 space-y-12"
    >
      <div>
        <p className="text-sm font-funnel text-center pt-20 pb-10">
          COORDINATORS
        </p>
        <hr className="border-0.5 border-white/20 w-full mb-6" />
      </div>

      {/* Staff Coordinators */}
      <div className="space-y-4 font-funnel">
        <h3 className="text-sm text-white/50">Staff Coordinators</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {coordinators.staff.map((person, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 150, 255, 0.3)"
            >
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-white/10 flex items-center justify-center ms-2 w-14 min-w-[3.5rem] aspect-square">
                  <FaRegUser size={20} />
                </div>
                <div className="text-left text-sm">
                  <h3 className="text-white">{person.name}</h3>
                  <p className="text-white/60">{person.email}</p>
                  <p className="text-white/60">{person.designation}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Student Coordinators */}
      <div className="space-y-6 font-funnel">
        <h3 className="text-sm text-white/50">Student Coordinators</h3>

        {/* Grouped Helper */}
        {[
          { title: "Tech", people: tech },
          { title: "Non-Tech", people: nonTech },
          { title: "Registration", people: registration },
        ].map(({ title, people }, idx) => (
          <div key={idx} className="space-y-2">
            <h4 className="text-sm text-white mb-4 text-center">{title}</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {people.map((person, i) => (
                <SpotlightCard
                  key={i}
                  className="custom-spotlight-card"
                  spotlightColor="rgba(80, 200, 130, 0.3)"
                >
                  <div className="flex items-center gap-6">
                    <div className="rounded-full bg-white/10 flex items-center justify-center w-10 ms-2 min-w-[3.5rem] aspect-square">
                      <FaRegUser size={18} />
                    </div>
                    <div className="text-left text-sm">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-white/60">{person.phone}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Cards */}
      <div className="space-y-4 font-funnel">
        <h4 className="text-sm text-white text-center">Social Media</h4>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              name: "Instagram",
              id: "@noctivus_25",
              icon: <FaInstagram size={20} className="text-emerald-400" />,
              link: "https://www.instagram.com/noctivus_25",
            },
            {
              name: "LinkedIn",
              id: "Noctivus Symposium",
              icon: <FaLinkedin size={20} className="text-emerald-400" />,
              link: "https://www.linkedin.com/company/noctivus-symposium/",
            },
            {
              name: "X (Twitter)",
              id: "@NoctivusSympo",
              icon: <FaXTwitter size={20} className="text-emerald-400" />,
              link: "https://x.com/noctivussympo",
            },
            {
              name: "Discord",
              id: "discord.gg/QJj4qAKJ",
              icon: <FaDiscord size={20} className="text-emerald-400" />,
              link: "https://discord.com/invite/QJj4qAKJ",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(80, 200, 130, 0.4)"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-400/10 flex items-center justify-center w-10 ms-2 min-w-[3.5rem] aspect-square">
                    {social.icon}
                  </div>
                  <div className="text-left text-sm flex-1 min-w-0">
                    <h3 className="text-white">{social.name}</h3>
                    <p
                      className="text-white/60 truncate max-w-[200px]"
                      title={social.id}
                    >
                      {social.id}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
