import React, { useEffect, useState } from 'react';

const BOOT_LINES = [
  '> booting henryli.me...',
  '> mounting design modules... [OK]',
  '> compiling portfolio... [OK]',
  '> welcome, HENRY LI',
];

const CHAR_DELAY = 25;        // ms per typed character
const LINE_PAUSE = 250;       // ms pause between lines
const HOLD_BEFORE_EXIT = 400; // ms to hold after the last line finishes
const FADE_DURATION = 500;    // ms — keep in sync with the duration-500 class below

export default function Bootup({ onComplete }) {
  const [lines, setLines] = useState(['']);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId;

    const typeNextChar = () => {
      const currentLine = BOOT_LINES[lineIndex];

      if (charIndex <= currentLine.length) {
        setLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex);
          return updated;
        });
        charIndex++;
        timeoutId = setTimeout(typeNextChar, CHAR_DELAY);
      } else {
        lineIndex++;
        if (lineIndex < BOOT_LINES.length) {
          charIndex = 0;
          setLines((prev) => [...prev, '']);
          timeoutId = setTimeout(typeNextChar, LINE_PAUSE);
        } else {
          timeoutId = setTimeout(() => {
            setFadingOut(true);
            setTimeout(onComplete, FADE_DURATION);
          }, HOLD_BEFORE_EXIT);
        }
      }
    };

    timeoutId = setTimeout(typeNextChar, CHAR_DELAY);
    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] bg-[#1c1c1c] flex items-center justify-center transition-opacity duration-500 ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-md px-6">
        {lines.map((line, i) => (
          <p key={i} className="whitespace-pre">
            {line}
            {i === lines.length - 1 && <span className="animate-pulse">_</span>}
          </p>
        ))}
      </div>
    </div>
  );
}