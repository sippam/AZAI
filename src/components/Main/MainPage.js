import React, { useState, useEffect } from "react";

const MainPage = () => {
  const storeText = [
    "สัมผัสประสบการณ์การเช่าห้องแบบใหม่",
    "หมดยุคของงานเอกสารบนกระดาษแล้ว",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % storeText.length);
    }, 6000); // Change the duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, []); // Run only once when the component mounts

  return (
   <div id="home" className="w-full flex justify-center">
      <div className="w-4/5 p-3 border-0 rounded-2xl flex flex-col justify-center mt-10 xl:w-4/5 2xl:w-3/5">
        <div className="text-7xl 2xl:text-8xl font-bold md:text-left">AZAI</div>
        <div className="flex flex-col mt-10 md:text-left">
          <FadeInOutText
            key={storeText[currentTextIndex]}
            text={storeText[currentTextIndex]}
          />
        </div>
        <hr className="mt-5 border-2 border-black"/>
      </div>
    </div>
  );
};

const FadeInOutText = ({ text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the text with fade-in effect after a short delay
    const timeoutId1 = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay for fade-in effect (adjust as needed)

    // Set a timeout to hide the text with fade-out effect after the fade-in duration
    const timeoutId2 = setTimeout(() => {
      setVisible(false);
    }, 5300); // Adjust the duration as needed

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [text]); // Run when the text changes

  return (
    <div className="w-auto">
      <div
        className={`fade-in-out ${visible ? "show" : ""} text-2xl md:text-3xl 2xl:text-5xl font-bold`}
      >
        {text}
      </div>
    </div>
  );
};

export default MainPage;
