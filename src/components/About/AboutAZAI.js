import React, { useState, useEffect } from "react";
import FadeInOutText from "../Main/FadeInOuutText";
import Product from "../../img/About/procduct.png";

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
    <div className="w-full flex justify-center lg:h-[60vh]">
      {" "}
      {/*h-[50vh] */}
      <div className="w-full border-0 rounded-2xl flex flex-col md:grid md:grid-cols-2 items-center">
        {/* <div className="w-full h-full mb-2 md:mb-0 flex justify-center items-center bg-[#255995]"> */}
        <img
          src={Product}
          className="w-full h-full"
          // className="w-full md:w-72 md:h-72"
          alt="logo"
          loading="lazy"
        />
        {/* </div> */}

        <div className="mx-4 md:mx-0 flex flex-col justify-center items-center">
          <FadeInOutText
            key={storeText[currentTextIndex]}
            text={storeText[currentTextIndex]}
          />
          <div className="md:mx-4 mt-2">
            แอปพลิเคชันเต็มรูปแบบที่จะมาจัดการและบริหาร ระบบงาน ของหอพัก
            อพาร์ทเม้นท์ และคอนโดของคุณ โดยมีการจัดการระบบแบบ Online
            ที่จะเป็นตัวเชื่อมต่อระหว่างผู้ประกอบการและผู้เช่า
            ทำให้ง่ายต่อการทำข้อตกลง ตั้งแต่ขั้นตอนแรกยันขั้นตอนสุดท้าย
          </div>
          <div className="mt-5">
            <div
              className="line-it-button w-full"
              data-lang="en"
              data-type="friend"
              data-env="REAL"
              data-lineId="@454coxni"
              style={{ display: "none", width: "200px" }}
            />
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
