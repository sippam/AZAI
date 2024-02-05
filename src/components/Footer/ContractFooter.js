import React from "react";
import FB from "../../img/Contract/Facebook_icon.png";
import Line from "../../img/Contract/Line.png";

const ContractFooter = () => {
  return (
    <div className="w-full bg-[#255995] text-white text-left">
      <div className="mx-6 py-4 lg:mx-10">
        <div className="text-xl font-bold xl:text-2xl">ติดต่อเรา</div>
        <div className="flex flex-col font-light">
          <div>บริษัท</div>
          <div>Facebook :</div>
          <div className=" mb-2"> Line : @454coxni</div>
          <div className="flex">
            <a
              className="w-8 mr-2"
              href="https://line.me/R/ti/p/@454coxni?from=page&searchId=454coxni"
              target="_blank"
            >
              <img src={FB} alt="facebook" className="w-full rounded-full" />
            </a>
            <a
              className="w-8"
              href="https://line.me/R/ti/p/@454coxni?from=page&searchId=454coxni"
              target="_blank"
            >
              <img src={Line} alt="line" className="w-full rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractFooter;
