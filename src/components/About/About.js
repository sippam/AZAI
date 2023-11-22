import React from "react";
import logo from "../../logo.svg";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center">
      <div className="w-4/5 p-3 bg-[#F2F2F2] border-0 rounded-2xl">
        <div className="text-xl font-bold mt-2">เกี่ยวกับเรา</div>
        <div>AZAI</div>
        <div>
          แอปพลิเคชันเต็มรูปแบบที่จะมาจัดการและบริหาร ระบบงาน ของหอพัก
          อพาร์ทเม้นท์ และคอนโดของคุณ
        </div>
        <div>
          โดยมีการจัดการระบบแบบ Online
          ที่จะเป็นตัวเชื่อมต่อระหว่างผู้ประกอบการและผู้เช่า
          ทำให้ง่ายต่อการทำข้อตกลง ตั้งแต่ขั้นตอนแรกยันขั้นตอนสุดท้าย
        </div>

        <div className="grid grid-rows-3 mb-2">
          <div className="grid grid-cols-2">
            <div className="border-r flex items-center justify-center">
              <img src={logo} className="w-32 h-32" alt="logo" />
            </div>
            <div className="flex items-center justify-center">
              <img src={logo} className="w-32 h-32" alt="logo" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="border-r flex items-center justify-center">
              <img src={logo} className="w-32 h-32" alt="logo" />
            </div>
            <div className="flex items-center justify-center">
              <img src={logo} className="w-32 h-32" alt="logo" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={logo} className="w-32 h-32" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
