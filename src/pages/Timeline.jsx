"use client";
import {
  FiUser,
  FiShield,
  FiCpu,
  FiAlertCircle,
  FiMusic,
  FiFileText,
  FiCode,
  FiMonitor,
  FiUnlock,
  FiSmartphone,
  FiCoffee,
} from "react-icons/fi";

const styleMap = {
  red: { bg: "bg-red-400/15", border: "border-red-500", icon: "text-red-500" },
  blue: { bg: "bg-blue-400/15", border: "border-blue-500", icon: "text-blue-500" },
  purple: { bg: "bg-purple-400/15", border: "border-purple-500", icon: "text-purple-500" },
  yellow: { bg: "bg-yellow-400/15", border: "border-yellow-500", icon: "text-yellow-500" },
  pink: { bg: "bg-pink-400/15", border: "border-pink-500", icon: "text-pink-500" },
  green: { bg: "bg-green-400/15", border: "border-green-500", icon: "text-green-500" },
  indigo: { bg: "bg-indigo-400/15", border: "border-indigo-500", icon: "text-indigo-500" },
  orange: { bg: "bg-orange-400/15", border: "border-orange-500", icon: "text-orange-500" },
  cyan: { bg: "bg-cyan-400/15", border: "border-cyan-300", icon: "text-cyan-300" },
  teal: { bg: "bg-teal-400/15", border: "border-teal-500", icon: "text-teal-500" },
  amber: { bg: "bg-amber-400/15", border: "border-amber-500", icon: "text-amber-500" },
};

const events = [
  {
    title: "Sympo Start Offline Registration",
    time: "8 – 9:45",
    start: 8,
    end: 9.75,
    color: "red",
    icon: FiUser,
  },
  {
  title: " The Art of Hacking (Workshop)",
  time: "10 – 1",
  start: 10,
  end: 13,
  color: "purple",
  icon: FiCpu,
},
{
  title: "Null Core",
  time: "10 – 1",
  start: 10,
  end: 13,
  color: "blue",
  icon: FiShield,
},

  {
    title: "GlitchGround",
    time: "10 – 11:30",
    start: 10,
    end: 11.5,
    color: "yellow",
    icon: FiAlertCircle,
  },
  {
    title: "Tune Tracker",
    time: "10 – 11:30",
    start: 10,
    end: 11.5,
    color: "pink",
    icon: FiMusic,
  },
  {
    title: "Paper to Pixel",
    time: "10 – 11:30",
    start: 10,
    end: 11.5,
    color: "green",
    icon: FiFileText,
  },
  {
    title: "Beat Overflow",
    time: "10 – 11:30",
    start: 10,
    end: 11.5,
    color: "indigo",
    icon: FiCode,
  },
  {
    title: "E-sports",
    time: "11:30 – 1",
    start: 11.5,
    end: 13,
    color: "orange",
    icon: FiMonitor,
  },
  {
    title: "Escape Room",
    time: "11:30 – 1",
    start: 11.5,
    end: 13,
    color: "cyan",
    icon: FiUnlock,
  },
  {
    title: "Beyond Screen",
    time: "11:30 – 1",
    start: 11.5,
    end: 13,
    color: "teal",
    icon: FiSmartphone,
  },
  {
    title: "Lunch",
    time: "1 – 2",
    start: 13,
    end: 14,
    color: "amber",
    icon: FiCoffee,
  },
  {
    title: "The Art of Hacking (Workshop)",
    time: "2 – 3:30",
    start: 14,
    end: 15.5,
    color: "purple",
    icon: FiCpu,
  },
  {
    title: "Prize",
    time: "2:30 – 3:30",
    start: 14.5,
    end: 15.5,
    color: "green",
    icon: FiFileText,
  },
];

const startHour = 8;
const endHour = 15.5; // up to 3:30 PM only
const totalHalfHours = (endHour - startHour) * 2;
const rowHeight = 60;

function assignRows(events) {
  const tracks = [];
  const layout = events.map((e) => {
    let row = 0;
    while (tracks[row]?.some((ev) => !(e.end <= ev.start || e.start >= ev.end)))
      row++;
    if (!tracks[row]) tracks[row] = [];
    tracks[row].push(e);
    return { ...e, row };
  });
  return { layout, maxRows: tracks.length };
}

const Timeline = () => {
  const { layout, maxRows } = assignRows(events);
  const containerHeight = maxRows * rowHeight;

  return (
    <section className="px-14 sm:px-10 md:px-20 lg:px-32 font-funnel text-white w-full">
      <h2 className="text-center text-md mb-6 pt-20">EVENT TIMELINE</h2>
      <hr className="border-0.5 border-white/20 w-full mb-6" />

      <div className="w-full overflow-x-auto">
        <div className="rounded-lg border border-white/20 bg-white/5 p-6 min-w-[1080px]">
          {/* Time Labels */}
          <div className="relative w-full mb-6" style={{ height: "40px" }}>
            {[...Array(totalHalfHours)].map((_, i) => {
  const current = startHour + i * 0.5;
  if (current === endHour) return null;
  const hour24 = Math.floor(current);
  const min = current % 1 === 0 ? "00" : "30";
  if (hour24 === 8 && min === "00") return null;

  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

  return (
    <div
      key={i}
      className="absolute text-white/70 text-md uppercase transform -translate-x-1/2"
      style={{ left: `${(i / totalHalfHours) * 100}%` }}
    >
      {hour12}:{min}
    </div>
  );
})}

          </div>

          {/* Timeline Grid */}
          <div className="relative w-full" style={{ height: `${containerHeight}px` }}>
            {/* Grid Lines */}
            <div
              className="absolute top-0 left-0 w-full h-full grid pointer-events-none z-0"
              style={{
                gridTemplateColumns: `repeat(${totalHalfHours}, minmax(0, 1fr))`,
                display: "grid",
              }}
            >
              {[...Array(totalHalfHours)].map((_, i) => (
                <div key={i} className="border-l border-white/10" />
              ))}
            </div>

            {/* Events */}
            {layout.map((event, idx) => {
              const widthPercent =
                ((event.end - event.start) / (endHour - startHour)) * 100 - 0.5;
              const leftPercent =
                ((event.start - startHour) / (endHour - startHour)) * 100;
              const top = event.row * rowHeight;
              const Icon = event.icon;
              const { bg, border, icon } = styleMap[event.color];

              return (
                <div
                  key={idx}
                  className={`absolute rounded-lg px-4 py-2 ${bg} ${border} border backdrop-blur-sm`}
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                    top: `${top}px`,
                    height: "48px",
                  }}
                >
                  <div className="flex items-center gap-3 text-base h-full">
                    <Icon className={`w-5 h-5 shrink-0 ${icon}`} />
                    <span className="truncate text-sm">{event.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
