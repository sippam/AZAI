import React from "react";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 p-3 bg-blue-gray-200 border-0 rounded-md">
        <div className="text-xl font-bold">เกี่ยวกับเรา</div>
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

        <div className="grid grid-rows-3">
            <div className="grid grid-cols-2">
                <div className="border-r">
                    1
                </div>
                <div>
                    1
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="border-r">
                    1
                </div>
                <div>
                    1
                </div>
            </div>
            <div>
                4
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
