"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypeWriterProps {
  strings: Array<string | { text: string; color: string }>;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ strings, className }) => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: strings.map((str) =>
        typeof str === "string"
          ? str
          : `<span class="text-${str.color}">${str.text}</span>`
      ),
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      cursorChar: "|",
      html: true,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings]);

  return (
    <div className={className}>
      <span ref={el} />
    </div>
  );
};

export default TypeWriter;
