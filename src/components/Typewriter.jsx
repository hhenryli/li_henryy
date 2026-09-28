import React, { useState, useEffect } from 'react';

function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1500,
  styles = [],      // array of className strings, one per word (text/font styling)
  icons = [],       // array of icon components (e.g. lucide-react icons), one per word
  pillStyles = [],  // array of className strings, one per word (background pill styling)
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && displayText === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  const currentStyle = styles[wordIndex] || '';
  const currentPillStyle = pillStyles[wordIndex] || 'bg-gray-100';
  const CurrentIcon = icons[wordIndex];

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors duration-200 ${currentPillStyle}`}
      style={{ minHeight: '2.5rem' }} // fixed height prevents collapse/shift when text is empty
    >
      <span className={`inline leading-none ${currentStyle}`}>
        {displayText || '\u00A0'} {/* non-breaking space keeps the line from collapsing */}
      </span >
      {CurrentIcon && <CurrentIcon className="w-4 h-4 shrink-0" />}
    </div>
  );
}

export default Typewriter;