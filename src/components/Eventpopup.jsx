// EventPopup.jsx
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventPopup = ({ event, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  const renderTextBlock = (title, content) => (
    <div className="space-y-1">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-sm text-neutral-300 whitespace-pre-line">{content}</p>
    </div>
  );

  const renderListBlock = (title, list) =>
    list?.length > 0 ? (
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ) : null;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.05 } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center will-change-auto"
        >
          <motion.div
            key="popup"
            ref={popupRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 220, damping: 20 },
            }}
            exit={{
              scale: 0.85,
              opacity: 0,
              transition: { duration: 0.15 },
            }}
            className="bg-neutral-950 font-funnel text-white rounded-2xl w-[90%] max-w-lg relative max-h-[90vh] overflow-hidden" // changed here
          >
            {/* Close button (fixed inside popup) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full transition duration-100 hover:bg-neutral-700 z-10"
            >
              &times;
            </button>

            {/* Scrollable content wrapper */}
            {/* Scrollable content wrapper */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[90vh] scrollbar-hide">
              <h2 className="text-sm font-semibold">{event.title}</h2>
              {event.schedule && renderTextBlock("Schedule", event.schedule)}
              {event.teamSize && renderTextBlock("Team Size", event.teamSize)}
              {event.overview && renderTextBlock("Overview", event.overview)}
              {event.format && renderTextBlock("Format", event.format)}
              {renderListBlock("Rules", event.rules)}
              {renderListBlock("Topics", event.topics)}
              {renderListBlock(
                "Submission Guidelines",
                event.submissionGuidelines
              )}
              {renderListBlock("Reporting Guidelines", event.reporting)}
              {renderListBlock("Prohibited Actions", event.prohibited)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;
