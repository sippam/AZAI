import React, { useState, useEffect } from "react";
import FadeInOutText from "../Main/FadeInOuutText";
import AZAI from "../../img/About/AZAI.jpg";

const AboutAZAI = () => {
  // const storeText = [
  //   "สัมผัสประสบการณ์การเช่าห้องแบบใหม่",
  //   "หมดยุคของงานเอกสารบนกระดาษแล้ว",
  // ];
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTextIndex((prevIndex) => (prevIndex + 1) % storeText.length);
  //   }, 6000); // Change the duration (in milliseconds) as needed

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []); // Run only once when the component mounts

  return (
    <div className="w-full flex justify-center lg:h-[50vh] xl:h-[70vh]">
      <div className="w-full border-0 rounded-2xl flex flex-col md:grid md:grid-cols-6 items-center">
        <div className="w-full h-full md:col-span-2">
          <img src={AZAI} className="h-full" alt="logo" loading="lazy" />
        </div>

        <div className="mx-4 md:mx-0 flex flex-col justify-center items-center md:col-span-4">
          {/* <FadeInOutText
            key={storeText[currentTextIndex]}
            text={storeText[currentTextIndex]}
          /> */}
          <div className="mt-6 font-bold text-xl md:text-2xl 2xl:text-4xl">
            AZAI "อาศัย" จะเปิดให้ใช้งานภายในมีนาคมนี้!
          </div>
          <div className="md:mx-4 mt-2">
            แอปพลิเคชันเต็มรูปแบบที่จะมาจัดการและบริหาร ระบบงาน ของหอพัก
            อพาร์ทเม้นท์ และคอนโดของคุณ โดยมีการจัดการระบบแบบ Online
            ที่จะเป็นตัวเชื่อมต่อระหว่างผู้ประกอบการและผู้เช่า
            ทำให้ง่ายต่อการทำข้อตกลง ตั้งแต่ขั้นตอนแรกยันขั้นตอนสุดท้าย
          </div>

          <div className="w-auto mb-6">
              <a href="https://forms.gle/bdg2bTvMXYDXeSAk8" target="_blank">
                <button className="text-xl 2xl:text-3xl mt-6 border- px-4 py-2 rounded-2xl text-white bg-[#FFAC1C] hover:bg-[#E3963E]">
                ลงทะเบียนใช้งาน!
                </button>
              </a>
            </div>
          {/* <button className="border bg-[#255995] px-4 py-2 rounded-2xl text-white mt-6 mb-8">
            สมัครใช้งาน
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutAZAI;
