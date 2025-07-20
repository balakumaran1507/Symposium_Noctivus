import { VscHome, VscTools, VscSymbolClass, VscMail } from "react-icons/vsc";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuBug } from "react-icons/lu";
import Dock from "./Dock.jsx";

const Navbar = ({
  scrollToAbout,
  scrollToTech,
  scrollToNtech,
  scrollToWorkshop,
  scrollToContact,
}) => {
  const items = [
    {
      icon: <VscHome className="text-lg md:text-xl" />,
      label: "About",
      onClick: scrollToAbout,
    },
    {
      icon: <LuBug className="text-lg md:text-xl stroke-[1.5]" />,
      label: "Tech",
      onClick: scrollToTech,
    },
    {
      icon: (
        <IoExtensionPuzzleOutline className="text-lg md:text-xl stroke-[1.5]" />
      ),
      label: "Non-Tech",
      onClick: scrollToNtech,
    },
    {
      icon: <VscTools className="text-lg md:text-xl" />,
      label: "Workshop",
      onClick: scrollToWorkshop,
    },
    {
      icon: <VscMail className="text-lg md:text-xl" />,
      label: "Contact",
      onClick: scrollToContact,
    },
  ];

  return (
    <Dock items={items} panelHeight={60} baseItemSize={40} magnification={50} />
  );
};

export default Navbar;
