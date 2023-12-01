import React, { useState, useEffect } from "react";

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
        className={`fade-in-out ${
          visible ? "show" : ""
        } text-2xl md:text-3xl 2xl:text-5xl font-bold`}
      >
        {text}
        {/* <hr className="mt-5 border-2 border-white" /> */}
      </div>
    </div>
  );
};

export default FadeInOutText;
