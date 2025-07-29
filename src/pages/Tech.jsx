import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import { HiOutlineFlag } from "react-icons/hi2";
import { LuBug, LuFileCode2 } from "react-icons/lu";
import { PiPalette } from "react-icons/pi";
import { VscCode } from "react-icons/vsc";

const events = [
  {
    title: "Null Core",
    icon: <HiOutlineFlag className="text-blue-400 text-4xl" />,
    description: "Capture The Flag",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "1 to 3 Members",
    overview:
      "A Jeopardy-style Capture The Flag (CTF) competition that challenges your cybersecurity and problem-solving skills",
    rules: [
      "Participation can be solo or in teams as per event guidelines",
      "Each participant can be part of only one team",
      "Registration on the official CTFd platform is mandatory to access challenges and submit flags",
      "All participants must report to the venue at least 10 minutes early",
      "Bring your own laptop; internet access will be provided if applicable",
      "Stay within the scope; do not attempt to hack outside the CTF environment",
      "Maintain discipline and respect towards volunteers and coordinators",
    ],
  },
  {
    title: "GlitchGround",
    icon: <LuBug className="text-blue-400 text-4xl stroke-1" />,
    description: "Bug Bounty",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "Solo",
    overview:
      "GlitchGround simulates a real-world bug bounty program. Identify security flaws and report them responsibly",
    rules: [
      "Solo participation only; no teams allowed",
      "Bugs must be reported during the event time window only",
      "All reports must follow the official bug submission format",
      "Only the first valid report for a bug will be accepted; others will be marked as duplicates",
      "Bugs must be within the given website scope; no out-of-scope or real-world targets",
      "Use of automated tools or scanners is strictly prohibited",
      "Violation of any rule will lead to instant disqualification",
    ],
  },
  {
    title: "Beat Overflow",
    icon: <VscCode className="text-blue-400 text-4xl" />,
    description: "Vibe Coding",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "1 to 2 Members",
    overview:
      "An AI-powered mobile app-building challenge using any tech stack under a surprise topic",
    rules: [
      "Participants must build a mobile app using any tech stack, including AI tools",
      "Projects must be developed entirely during the event; no pre-written code",
      "Submissions must be completed and submitted before the deadline",
      "Using existing GitHub repositories or pre-made templates is strictly prohibited",
      "AI tools like ChatGPT, GitHub Copilot, etc. are allowed but the work must remain original",
      "No idea or code sharing between teams is permitted",
      "Judges’ decisions are final and binding; all entries will be evaluated fairly",
    ],
  },
  {
    title: "Beyond Screen",
    icon: <PiPalette className="text-blue-400 text-4xl" />,
    description: "UI/UX",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "Solo",
    overview:
      "A solo UI/UX event to design intuitive and creative interfaces within the given time frame",
    rules: [
      "Final submission must include a clear user flow and a brief design explanation",
      "All work must be created during the event; no prior designs or assets",
      "Participants must submit within the allotted time; late entries will not be accepted",
      "Use of pre-existing templates is strictly prohibited",
      "No collaboration is allowed; participants must work independently",
      "Designs will be judged on creativity, clarity, and usability",
      "The judges’ decision is final and binding",
    ],
  },
  {
    title: "Paper To Pixel",
    icon: <LuFileCode2 className="text-blue-400 text-4xl stroke-1" />,
    description: "Paper Presentation",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "1 to 2 Members",
    overview:
      "Present your original research and technical ideas with clarity and confidence in a structured presentation.",
    download: {
    label: "Paper format",
    fileName: "PaperToPixel.pptx",
    filePath: "/ptp.pptx"
    },
      rules: [
      "Use of the official PPT template is mandatory for all submissions.",
      "Each team or individual gets 3 minutes to present and 2 minutes for Q&A.",
      "Presentations must be clear, concise, and follow a logical flow.",
      "Each team or individual must submit only one paper",
      "Plagiarism will lead to immediate disqualification; originality is a must.",
      "Maintain professional behavior and academic integrity throughout.",
      <>
        All abstracts must be submitted on or before <strong>30th July, 10:00 AM</strong>
        <a href="mailto:ops@noctivus.pro" className="text-blue-500 underline">
          ops@noctivus.pro
        </a>.
      </>,
      "The abstract must be approximately 150 words, written in Times New Roman, font size 14.",
      <>
        Final Paper must be submitted on or before <strong>30th July</strong> to{" "}
        <a href="mailto:ops@noctivus.pro" className="text-blue-500 underline">
          ops@noctivus.pro 
        </a> with registration proof.
      </>,
      "All submissions are allowed only after successful registration.",
      "All presentations must be submitted before the event begins; late submissions will not be accepted.",
    ],
    topics: [
      "AI & Cybersecurity Fusion",
      "Cybercrime and Forensics",
      "Low Power VLSI Design for IoT",
      "Inclusive Innovation",
      "From Ideas to APK",
      "Emerging Technologies",
    ],

  }
];

const Tech = ({ refProp }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section ref={refProp} className="px-10 md:px-20 lg:px-32 text-white pb-20">
      <p className="text-sm font-funnel text-center pt-20 pb-10">
        TECHNICAL EVENTS
      </p>
      <hr className="border-0.5 border-white/20 w-full" />

      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-y-10 mt-10">
        {events.map((event, index) => (
          <div key={index} className="w-[180px] h-[180px] font-funnel">
            <SpotlightCard
              className="w-full h-full cursor-pointer transition-transform hover:scale-[1.03]"
              spotlightColor="rgba(0, 150, 255, 0.4)"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex flex-col items-center justify-center text-center h-full px-1.5 py-2">
                <div>{event.icon}</div>
                <h3 className="text-sm font-funnel pt-3">{event.title}</h3>
                <p className="text-sm text-white/50">{event.description}</p>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>

      <EventPopup
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

export default Tech;
