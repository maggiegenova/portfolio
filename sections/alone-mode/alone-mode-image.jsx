import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AloneModeImage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.img
        src="/intro-6.png"
        alt="Emergency notification"
        className="w-[35%] h-auto block mx-auto cursor-pointer rounded-xl shadow-md"
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
              src="/intro-6.png"
              alt="Emergency notification"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
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

export default AloneModeImage;
