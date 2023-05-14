import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  texts: string[];
  colors?: string[];
  intervals: number[];
}

const HeroText: React.FC<AnimatedTextProps> = ({
  texts,
  colors,
  intervals,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervals[currentTextIndex]);

    return () => {
      clearInterval(timer);
    };
  }, [texts, intervals, currentTextIndex]);

  useEffect(() => {
    setCurrentTextIndex(0); // Reset the text index when intervals change
  }, [intervals]);

  return (
    <div className="text-container">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`animated-text ${
            index === currentTextIndex ? "active" : ""
          }`}
          style={colors ? { color: colors[index % colors.length] } : {}}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default HeroText;
