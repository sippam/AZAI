import React from "react";
import Pic1 from "../../img/About/pic1.jpg";
import Pic2 from "../../img/About/pic2.jpg";
import CEO from "../../img/About/CEO.jpg";
import CFO from "../../img/About/CFO.jpg";
import CMO from "../../img/About/CMO.jpg";
import COO from "../../img/About/COO.jpg";
import CTO from "../../img/About/CTO.jpg";
import CardShowMember from "./CardShowMember";

const About = () => {
  const members = [
    {
      id: 1,
      name: "Patt Phurtivilai",
      position: "CEO",
      img: CEO,
    },
    {
      id: 2,
      name: "Kusuma Jaipiam",
      position: "CTO",
      img: CTO,
    },
    {
      id: 3,
      name: "Hansalak Senarak",
      position: "CFO",
      img: CFO,
    },
    {
      id: 4,
      name: "Naphak Jaengjaikul",
      position: "CMO",
      img: CMO,
    },
    {
      id: 5,
      name: "T-touch Pattaravarodom",
      position: "COO",
      img: COO,
    },
  ];

  const sizeImage = "w-9/12 rounded-2xl mb-4 md:w-56";

  return (
    <div id="about" className="w-full flex justify-center">
      <div className="w-11/12 p-3 md:px-7 2xl:w-3/5 xl:w-4/5 md:flex md:gap-4">
        <div className="md:w-1/2 flex flex-col mt-2">
          <div className="font-bold text-2xl md:justify-start 2xl:flex 2xl:justify-center mb-4">
            เกี่ยวกับเรา
          </div>
          <div className="flex flex-col items-center mb-4 md:mx-4">
            <img src={Pic1} className={sizeImage} alt="logo" />
            <img src={Pic2} className={sizeImage} alt="logo" />
            <div className="w-full text-left mb-4">
              สวัสดีครับพวกเรา "อาศัย" (AZAI)
              เราเป็นหนึ่งในทีมผู้ชนะจากรายการแข่งขัน startup #CUPP2023
              ที่จัดโดยหน่วยงานของรัฐบาลฮ่องกง
              เราภูมิใจนำเสนอแอปพลิเคชั่นจัดการหอพักที่จะมาเปลี่ยนประสบการณ์การเช่าห้องเช่าของคุณอย่างไม่เหมือนเคย
            </div>
            <div className="w-full text-left">
              "แล้วการเช่าห้องของคุณจะไม่เหมือนเดิมอีกต่อไป" - AZAI Team
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col mt-2 lg:justify-center lg:items-center">
          <div className="w-full font-semibold text-xl md:justify-start 2xl:flex 2xl:justify-center md:mb-4 mb-4">
            สมาชิก
          </div>
          <div className="lg:w-4/5">
            {members.map((data) => {
              return <CardShowMember data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
