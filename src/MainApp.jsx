import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Timeline from "./pages/Timeline";
import NonTech from "./pages/NonTech";
import Workshop from "./pages/Workshop";
import Map from "./pages/Map";
import Coordinators from "./pages/Coordinators";
import Brochure from "./pages/Brochure";
import BusRoutes from "./pages/BusRoutes";
const MainApp = () => {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const ntechRef = useRef(null);
  const workshopRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-black min-h-screen relative">
      <Hero />
      <About refProp={aboutRef} />
      <Tech refProp={techRef} />
      <NonTech refProp={ntechRef} />
      <Workshop refProp={workshopRef} />
      <Timeline />
      <Brochure />
      <Coordinators refProp={contactRef} />
      <BusRoutes />
      <Map />
      <Navbar
        scrollToAbout={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToTech={() =>
          techRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToNtech={() =>
          ntechRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToWorkshop={() =>
          workshopRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToContact={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
};

export default MainApp;
