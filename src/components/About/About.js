import React from "react";
import logo from "../../logo.svg";

const About = () => {
  const sizeImage = "w-32 h-32 md:w-48 md:h-48";

  return (
    <div id="about" className="w-full flex justify-center">
      <div className="w-11/12 p-3 border-0 rounded-2xl md:px-7 2xl:w-3/5 xl:w-4/5">
        <div className="font-bold text-2xl mt-2 md:flex md:justify-start md:mb-4 2xl:justify-center">
          เกี่ยวกับเรา
        </div>
        {/* <div className="text-2xl my-1 mb-2">AZAI</div>
        <div className="flex flex-col justify-center items-center">
          <div className="md:w-3/5">
            แอปพลิเคชันเต็มรูปแบบที่จะมาจัดการและบริหาร ระบบงาน ของหอพัก
            อพาร์ทเม้นท์ และคอนโดของคุณ
          </div>
          <div className="md:w-3/5">
            โดยมีการจัดการระบบแบบ Online
            ที่จะเป็นตัวเชื่อมต่อระหว่างผู้ประกอบการและผู้เช่า
            ทำให้ง่ายต่อการทำข้อตกลง ตั้งแต่ขั้นตอนแรกยันขั้นตอนสุดท้าย
          </div>
        </div> */}

        <div className="grid grid-rows-3 mb-2 md:grid-rows-2">
          <div className="grid grid-cols-2 mb-4">
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="border-r-2 border-black w-full md:border-r-2 md:border-black flex justify-center">
                <img src={logo} className={sizeImage} alt="logo" />
              </div>
              <div>Patt Phurtivilai</div>
              <div>CEO</div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <img src={logo} className={sizeImage} alt="logo" />
              <div>Kusuma Jaipiam</div>
              <div>CTO</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className=" flex flex-col items-center justify-center">
              <div className="border-r-2 border-black w-full md:border-r-2 md:border-black flex justify-center">
                <img src={logo} className={sizeImage} alt="logo" />
              </div>
              <div>Hansalak Senarak</div>
              <div>CFO</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="md:w-full md:border-r-2 md:border-black flex justify-center">
                <img src={logo} className={sizeImage} alt="logo" />
              </div>
              <div>Naphak Jaengjaikul</div>
              <div>CMO</div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="w-full  flex justify-center">
                <img src={logo} className={sizeImage} alt="logo" />
              </div>
              <div>T-touch Pattaravarodom</div>
              <div>COO</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:hidden">
            <img src={logo} className={sizeImage} alt="logo" />
            <div>T-touch Pattaravarodom</div>
            <div>COO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
