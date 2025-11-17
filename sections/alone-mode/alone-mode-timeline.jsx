import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aloneModeTimelineImage from '../../app/images/timeline.png';

function AloneModeTimeline() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.img
        src={aloneModeTimelineImage.src}
        alt="Phase 1 - Timeline"
        className="w-[65%] h-auto block mx-auto cursor-pointer rounded-xl shadow-md"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              src={aloneModeTimelineImage.src}
              alt="Expanded Timeline"
              className="w-full max-w-[700px] h-auto mx-auto block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AloneModeTimeline;
