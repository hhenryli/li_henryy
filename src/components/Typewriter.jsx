import React, { useState, useEffect } from 'react';

function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1500,
  styles = [],
  colors = [],
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
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  const currentStyle = styles[wordIndex] || '';
  const currentColor = colors[wordIndex] || '';

  return (
    <span className={`thinserif italic`}>
      {displayText}.
    </span>
  );
}

export default Typewriter;