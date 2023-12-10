import React, { useState, useEffect } from "react";
import BuildingImg from "../../img/Building-bro.png";
import FadeInOutText from "../Main/FadeInOuutText";

const AboutAZAI = () => {
  const storeText = [
    "สัมผัสประสบการณ์การเช่าห้องแบบใหม่",
    "หมดยุคของงานเอกสารบนกระดาษแล้ว",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % storeText.length);
    }, 6000); // Change the duration (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run only once when the component mounts

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 p-3 border-0 rounded-2xl md:px-7 2xl:w-3/5 xl:w-4/ md:grid grid-cols-2">
        <div className="md:hidden mb-2">
          <img src={BuildingImg} className="w-full" alt="logo" />
          <FadeInOutText
            key={storeText[currentTextIndex]}
            text={storeText[currentTextIndex]}
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="md:mx-4">
            แอปพลิเคชันเต็มรูปแบบที่จะมาจัดการและบริหาร ระบบงาน ของหอพัก
            อพาร์ทเม้นท์ และคอนโดของคุณ
          </div>
          <div className="md:mx-4">
            โดยมีการจัดการระบบแบบ Online
            ที่จะเป็นตัวเชื่อมต่อระหว่างผู้ประกอบการและผู้เช่า
            ทำให้ง่ายต่อการทำข้อตกลง ตั้งแต่ขั้นตอนแรกยันขั้นตอนสุดท้าย
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center items-center">
          <img src={BuildingImg} className="w-72 h-72" alt="logo" />
          <FadeInOutText
            key={storeText[currentTextIndex]}
            text={storeText[currentTextIndex]}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAZAI;
