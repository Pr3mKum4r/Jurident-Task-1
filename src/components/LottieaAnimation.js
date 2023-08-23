import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/cubeanimation.json';
import './LottieAnimation.css';
import { useEffect,useState } from 'react';
const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animationSize = { height: 800, width: 800 };
  const textToDisplay = "Hello, this is a typewriter effect!";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + textToDisplay[currentIndex]);
      currentIndex++;
      if (currentIndex === textToDisplay.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [textToDisplay]);
  return (
    <div className="lottie-container">
    <div className="typewriter-text" style={{color:'white'}}>{displayedText}</div>
      <div className="animated-cube">
        <Lottie options={defaultOptions} height={animationSize.height} width={animationSize.width} />
      </div>
    </div>
  );
};

export default LottieAnimation;