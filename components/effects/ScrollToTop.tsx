"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handler = () => {

      setShow(window.scrollY > 500);

    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);

  }, []);

  return (

    <AnimatePresence>

      {show && (

        <motion.button
          initial={{
            opacity: 0,
            scale: .6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: .6,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
          fixed
          bottom-8
          left-8
          z-50
          rounded-full
          bg-gradient-to-r
          from-violet-600
          to-cyan-500
          p-4
          shadow-xl
          "
        >

          <ArrowUp />

        </motion.button>

      )}

    </AnimatePresence>

  );

}