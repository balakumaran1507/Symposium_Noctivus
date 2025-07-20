import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const [cachedX, setCachedX] = useState(Infinity);
  const [size, setSize] = useState(baseItemSize);

  useEffect(() => {
    const updateSize = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const center = rect.x + rect.width / 2;
      const dist = Math.abs(cachedX - center);
      const limitedDist = Math.min(dist, distance);
      const scale =
        1 +
        ((magnification - baseItemSize) / baseItemSize) *
          (1 - limitedDist / distance);
      setSize(baseItemSize * scale);
    };

    const id = requestAnimationFrame(updateSize);
    return () => cancelAnimationFrame(id);
  }, [cachedX, baseItemSize, magnification, distance]);

  useEffect(() => {
    const unsub = mouseX.on("change", setCachedX);
    return () => unsub();
  }, [mouseX]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full border-white/20 backdrop-blur-md border-2 shadow-md transition-all duration-100 ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = "", isHovered }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? -10 : 0 }}
      transition={{ duration: 0.2 }}
      className={`absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-white/20 backdrop-blur-md px-2 py-0.5 text-sm font-funnel text-white ${className}`}
      role="tooltip"
      style={{ x: "-50%", pointerEvents: "none", position: "absolute" }}
    >
      {children}
    </motion.div>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center h-full w-full ${className}`}
    >
      <div className="text-[32px]">{children}</div>
    </div>
  );
}

export default function Dock({
  items = [],
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height }}
      className="mx-2 flex max-w-full items-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} absolute bottom-2 mb-5 left-1/2 transform -translate-x-1/2 flex items-end gap-3 sm:gap-4 rounded-full backdrop-blur-md fixed border-white/20 border-2 pb-2 px-3 sm:px-4 max-w-[92vw] sm:max-w-fit bg-black/30`}
        style={{ height: panelHeight + 5 }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={`translate-y-[-3px] ${item.className}`}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon className="backdrop-blur-lg bg-black/30 rounded-full text-white">
              {item.icon}
            </DockIcon>
            <DockLabel className="bg-black" isHovered={useMotionValue(0)}>
              {item.label}
            </DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
