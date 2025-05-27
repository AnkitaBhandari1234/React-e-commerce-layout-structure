import React, { useEffect, useState } from 'react'
import LightPng from '../../assets/lightmode.png';
import DarkPng from '../../assets/darkmode.png';
const Darkmode = () => {
   const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Toggle class on <html> or <body> for Tailwind dark mode
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };
  return (
    <div className=" flex justify-center items-center">
      <button
        onClick={toggleTheme}
        className=" transition-all duration-300 "
      >
        {/* 🔁 Swap the image/icon based on theme */}
        {isDark ? (
          <img src={DarkPng} alt="Light Mode" className="w-12" />
        ) : (
          <img src={LightPng} alt="Dark Mode" className="w-12" />
        )}
      </button>
    </div>
        

    
  )
}

export default Darkmode