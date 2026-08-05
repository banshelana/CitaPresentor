"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
}

export default function CountUp({
  value,
  suffix = "",
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2,
      onUpdate(v) {
        setCount(Math.floor(v));
      },
    });

    return () => controls.stop();
  }, [value, inView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}