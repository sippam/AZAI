import React, { useState } from "react";
import Card from "./Card";
import LineChatBot from "../../img/Service/LineChatBot.jpg";
import Transaction from "../../img/Service/Transaction.png";
import Contract from "../../img/Service/Contract.png";
import Dashboard from "../../img/Service/Dashboard.png";
import Chat from "../../img/Service/Chat.png";
import Analytics from "../../img/Service/Analytics.png";

const Service = () => {
  const [featureID, setFeatureID] = useState(1);

  const feature = [
    {
      id: 1,
      key: "Lineแชทบอทอัฉริยะ",
      data: "แชทบอทอัจฉริยะที่สามารถแจ้งเตือน บิลค่าน้ำ ค่าไฟ ค่าเช่า ประกาศจากเจ้าของหอ พัสดุ ฯลฯ และสามารถโต้ตอบกับผู้เช่าได้",
      component: <Card dataImg={LineChatBot} />,
    },
    {
      id: 2,
      key: "ระบบตรวจเช็คบิลอัตโนมัติ",
      data: "ระบบที่จะอัปเดตสถานะบิลอัตโนมัติ หลังจากที่มีการทำธุรกรรมจากผู้เช่า ประหยัดเวลาเจ้าของหอพักในการเช็คบิลโดยตนเอง",
      component: <Card dataImg={Transaction} />,
    },
    {
      id: 3,
      key: "ทำสัญญาเช่า",
      data: "ระบบการทำสัญญาเช่าออนไลน์ รวดเร็ว ทำได้ทุกที่ ทุกเวลา โปร่งใส ถูกกฎหมาย โดยไม่ใช้เอกสารกระดาษ",
      component: <Card dataImg={Contract} />,
    },
    {
      id: 4,
      key: "แดชบอร์ด",
      data: "ประกาศจากเจ้าของหอพักที่จะแจ้งเตือนผู้เช่าผ่านLineแชทบอท ง่าย ฉับไว ใช้งานได้ตลอด 24ชั่วโมง ",
      component: <Card dataImg={Dashboard} />,
    },
    {
      id: 5,
      key: "แชทกับผู้เช่า",
      data: "ติดต่อสื่อสารกับผู้เช่าส่วนตัวง่ายๆผ่านแอปของเรา",
      component: <Card dataImg={Chat} />,
    },
    {
      id: 6,
      key: "วิเคราะห์ข้อมูล",
      data: "วิเคราะห์ข้อมูลผลประกอบการประจำperiod (รอบการจ่ายเงิน, รายสัปดาห์, รายเดือน, รายปี）ทั้งรายรับ-รายจ่าย, การเข้าออกของผู้เช่า นำข้อมูลไปต่อยอดในการวางแผนธุรกิจอย่างมีประสิทธิภาพ",
      component: <Card dataImg={Analytics} />,
    },
  ];

  const changeFeature = (id) => {
    setFeatureID(id);
  };

  return (
    <div id="service" className="w-full bg-[#f8f9fb] flex justify-center">
      <div className="w-11/12 p-3 border-0 md:rounded-2xl md:px-7 2xl:w-3/5 xl:w-4/5">
        <div className="flex justify-center font-bold text-2xl mt-2 md:mb-4">
          บริการ
        </div>

        {/* Mobile feature */}
        <div className="grid grid-rows-2 gap-2 xl:hidden pt-4 md:pt-0">
          <div className="flex justify-center">
            {feature.map((item) => {
              if (item.id <= 2) {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center px-1"
                    onClick={() => changeFeature(item.id)}
                  >
                    <div
                      className={`text-xs border border-black rounded-2xl p-2 pointer-events-auto hover:cursor-pointer ${
                        featureID === item.id ? "bg-[#255995] text-white" : "hover:bg-[#77b0f1]"
                      }`}
                    >
                      {item.key}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="flex justify-center">
            {feature.map((item) => {
              if (item.id > 2) {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center px-1"
                    onClick={() => changeFeature(item.id)}
                  >
                    <div
                      className={`text-xs border border-black rounded-2xl p-2 pointer-events-auto hover:cursor-pointer ${
                        featureID === item.id ? "bg-[#255995] text-white" : "hover:bg-[#77b0f1]"
                      }`}
                    >
                      {item.key}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        {/*  */}

        {/* Com Feature */}
        <div className="hidden xl:flex xl:justify-center">
          {feature.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center px-1"
                onClick={() => changeFeature(item.id)}
              >
                <div
                  className={`text-base border border-black rounded-2xl p-2 pointer-events-auto hover:cursor-pointer ${
                    featureID === item.id ? "bg-[#255995] text-white" : "hover:bg-[#77b0f1]"
                  }`}
                >
                  {item.key}
                </div>
              </div>
            );
          })}
        </div>
        {/*  */}

        <div className="2xl:flex 2xl:justify-center pt-4">
          <div className="flex flex-col items-center mb-2 justify-center md:grid md:grid-cols-2 xl:w-full">
            <div>
              <div className="text-xl font-bold md:text-left md:mx-6">
                {feature[featureID - 1].key}
              </div>
              <div className=" text-center mt-2 md:text-left md:mx-6">
                {feature[featureID - 1].data}
              </div>
            </div>
            <div className="mt-2 flex justify-center">
              {feature[featureID - 1].component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
