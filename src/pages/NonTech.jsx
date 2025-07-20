import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import { RxCrosshair2 } from "react-icons/rx";
import { LuMusic2, LuLock } from "react-icons/lu";

const events = [
  {
    title: "Tune Tracker",
    icon: <LuMusic2 className="text-emerald-400 text-4xl stroke-1" />,
    description: "Guess The Beats",
    date: "Aug 21, 2025",
    venue: "AV Room",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "2 to 4 Members",
    overview:
      "A thrilling music-based non-tech event with three engaging rounds: reversed BGMs, audio puzzles, and visual clues to challenge your senses.",
    rules: [
      "The event includes three rounds: Reverse BGM, Audio Puzzle, Visual Clues",
      "Mobile phone use is strictly prohibited during the event",
      "Participants must report to the venue 10 minutes early",
      "No external help or team switching is allowed",
      "Judges’ decisions are final and binding",
    ],
  },
  {
    title: "Escape Room",
    icon: <LuLock className="text-emerald-400 text-4xl stroke-1" />,
    description: "Crack The Code",
    date: "Aug 21, 2025",
    venue: "CSE Lab 2",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "2 to 4 Members",
    overview:
      "A fast-paced logic-based challenge where teams solve puzzles, crack codes, and use teamwork to break out of the room. Let your brain do the talking.",
    rules: [
      "The event includes four rounds featuring puzzles, codes, and logic-based challenges",
      "Mobile phone use is strictly prohibited throughout the event",
      "Follow coordinator instructions carefully to avoid disqualification",
      "Do not reveal answers or clues to other teams — keep it competitive",
      "Maintain discipline and enthusiasm throughout",
    ],
  },
  {
    title: "Free Fire",
    icon: (
      <img
        src="/Knife_Icon.svg"
        alt="Knife Icon"
        className="w-10 h-10 object-contain"
      />
    ),
    description: "Booyah Awaits",
    date: "Aug 22, 2025",
    venue: "GameZone",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "4 Members",
    overview:
      "Gear up for an adrenaline-pumping Free Fire tournament that demands tactical skill, fast reflexes, and pure squad synergy.",
    rules: [
      "Each player can play for only one team — breaking this rule leads to disqualification",
      "No teaming with other squads",
      "Join the lobby 10 minutes early — late entry is not allowed",
      "Mobile players only — no PC or emulator users",
      "Player level must be 40+ in-game",
      "Download all required maps before the match",
      "No emotes during gameplay",
      "Gun attributes must be turned off for fairness",
      "Abusive or spam chat leads to instant disqualification",
      "No pauses for individual issues",
      "No hacks or panels — immediate disqualification",
      "Rematch only if all teams face network issues",
    ],
  },
  {
    title: "BGMI",
    icon: <RxCrosshair2 className="text-emerald-400 text-4xl" />,
    description: "Erangel Echoes",
    date: "Aug 22, 2025",
    venue: "GameZone",
    schedule: "10:00 AM – 12:45 PM",
    teamSize: "4 Members",
    overview:
      "Drop into the battleground for an intense BGMI squad showdown, where only the sharpest team will survive and claim the winner’s tag.",
    rules: [
      "Mobile devices only — no emulators allowed",
      "Hacks, cheats, or third-party tools will result in instant disqualification",
      "Join the custom room 10 minutes early — late entries are not accepted",
      "If a single room: top 4 teams advance",
      "If multiple rooms: top 2 teams from each room move forward",
      "Top 4 teams enter knockout TDM rounds",
      "Final 2 teams battle in the last TDM to crown the champion",
    ],
  },
];

const NonTech = ({ refProp }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section ref={refProp} className="px-10 md:px-20 lg:px-32 text-white pb-20">
      <p className="text-sm font-funnel text-center pt-20 pb-10">
        NON-TECHNICAL EVENTS
      </p>
      <hr className="border-0.5 border-white/20 w-full" />

      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-y-10 mt-10">
        {events.map((event, index) => (
          <div key={index} className="w-[180px] h-[180px] font-funnel">
            <SpotlightCard
              className="w-full h-full cursor-pointer transition-transform hover:scale-[1.03]"
              spotlightColor="rgba(80, 200, 130, 0.4)"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex flex-col items-center justify-center text-center h-full px-1.5 py-2">
                <div>{event.icon}</div>
                <h3 className="text-sm pt-3">{event.title}</h3>
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

export default NonTech;
