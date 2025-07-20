import { useEffect, useRef, useState } from "react";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const rafRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  // Run only on non-touch devices
  useEffect(() => {
    if (isTouchDevice()) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let isTabVisible = true;

    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(rafRef.current);
      }
    };

    const animate = () => {
      currentX.current += (mouseX.current - currentX.current) * 0.15;
      currentY.current += (mouseY.current - currentY.current) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${
          currentX.current - 20
        }px, ${currentY.current - 20}px, 0)`;
      }

      if (isTabVisible) rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white transition-transform duration-75 ease-out will-change-transform"
    />
  );
};

export default CustomCursor;
