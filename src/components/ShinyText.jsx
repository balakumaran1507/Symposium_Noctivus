const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const shineStyles = !disabled
    ? {
        animationDuration: `${speed}s`,
        color: "transparent",
      }
    : {
        color: "#ffffff", // fallback visible white
      };

  return (
    <div
      className={`inline-block ${
        !disabled ? "shine-animation" : ""
      } ${className}`}
      style={shineStyles}
    >
      {text}
    </div>
  );
};

export default ShinyText;
