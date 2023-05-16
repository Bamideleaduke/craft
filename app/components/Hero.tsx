import React from "react";
import HeroText from "../components/HeroText";

const Hero = () => {
  const texts = [
    "Welcome to Craft Heaven",
    "A Community for hand made product",
    "Creativity is appreciated here",
  ]; // Add your desired text content here
  const colors = ["red", "blue", "green"];
  const intervals = [2000, 3000, 4500]; // Change this value to adjust the interval (in milliseconds)

  return (
    <div >
      <HeroText texts={texts} intervals={intervals} colors={colors} />
    </div>
  );
};

export default Hero;
