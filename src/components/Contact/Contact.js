import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import FB from "../../img/Contract/Facebook_icon.png";
import Line from "../../img/Contract/Line.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleForm = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = async () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    Swal.fire({
      icon: "success",
      title: "ส่งข้อความสำเร็จ",
      text: "ขอบคุณสำหรับข้อความของคุณ",
    });
    await Axios.post(`${process.env.REACT_APP_SERVICE}/sendEmail`, form);
  };

  const canSubmit =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.subject.trim() !== "" &&
    form.message.trim() !== "";
  const styleSubmit = canSubmit
    ? "bg-[#37c257] hover:bg-[#218838] text-black font-bold py-2 px-6 rounded-xl mt-2 mb-2"
    : "bg-[#ff6060] hover:bg-red-500 text-black font-bold py-2 px-6 rounded-xl mt-2 mb-2 opacity-50 cursor-not-allowed";

  return (
    <div id="contact" className="w-full bg-[#f8f9fb] flex justify-center">
      <div className="w-11/12 p-3 md:px-7 2xl:w-3/5 xl:w-4/5 md:grid md:grid-cols-2">
        <div className="md:h-full md:border-r-2 md:border-black">
          <div className="justify-center font-bold text-2xl mt-2 md:flex md:justify-start md:mb-4">
            ติดต่อเรา
          </div>

          <div className="md:hidden w-full mt-4">
            <div className="md:mx-4">
              <input
                onChange={handleForm}
                type="text"
                name="name"
                className="border-2 border-gray-600 rounded-xl w-full h-10 px-3"
                placeholder="ชื่อ"
                value={form.name}
              />
              <input
                onChange={handleForm}
                type="text"
                name="email"
                className="border-2 my-3 border-gray-600 rounded-xl w-full h-10 px-3"
                placeholder="อีเมล"
                value={form.email}
              />
              <input
                onChange={handleForm}
                type="text"
                name="subject"
                className="border-2 border-gray-600 rounded-xl w-full h-10 px-3"
                placeholder="หัวข้อ"
                value={form.subject}
              />
              <textarea
                onChange={handleForm}
                name="message"
                className="border-2 my-3 border-gray-600 rounded-xl w-full h-32 px-3 py-2"
                placeholder="ข้อความ"
                value={form.message}
              />
              <button
                onClick={sendEmail}
                disabled={!canSubmit}
                // className={"bg-[#37c257] hover:bg-[#218838] text-black font-bold py-2 px-6 rounded-xl mt-2 mb-2"}
                className={styleSubmit}
              >
                ส่ง
              </button>
            </div>
            <hr className="border-black my-4 md:hidden" />
          </div>

          <div className="md:flex">
            <div className="text-left font-bold">
              <div className="my-2">ที่อยู่ :</div>
              <div className="my-2">เบอร์โทรศัพท์ :</div>
              <div className="my-2">อีเมล :</div>
              {/* <div className="flex flex-col font-light md:font-normal"> */}
              <div className="my-2">บริษัท</div>
              <div className="my-2">Facebook :</div>
              <div className=" mb-2 my-2"> Line : @454coxni</div>
              <div className="flex">
                <a
                  className="w-8 mr-2"
                  href="https://line.me/R/ti/p/@454coxni?from=page&searchId=454coxni"
                  target="_blank"
                >
                  <img
                    src={FB}
                    alt="facebook"
                    className="w-full rounded-full"
                  />
                </a>
                <a
                  className="w-8"
                  href="https://line.me/R/ti/p/@454coxni?from=page&searchId=454coxni"
                  target="_blank"
                >
                  <img src={Line} alt="line" className="w-full rounded-full" />
                </a>
                {/* </div>`` */}
              </div>
            </div>
            <hr className="border-black my-4 md:hidden" />
          </div>
        </div>
        <div className="w-full md:flex md:flex-col md:justify-center hidden">
          <div className="md:mx-4">
            <input
              onChange={handleForm}
              type="text"
              name="name"
              className="border-2 border-gray-600 rounded-xl w-full h-10 px-3"
              placeholder="ชื่อ"
              value={form.name}
            />
            <input
              onChange={handleForm}
              type="text"
              name="email"
              className="border-2 my-3 border-gray-600 rounded-xl w-full h-10 px-3"
              placeholder="อีเมล"
              value={form.email}
            />
            <input
              onChange={handleForm}
              type="text"
              name="subject"
              className="border-2 border-gray-600 rounded-xl w-full h-10 px-3"
              placeholder="หัวข้อ"
              value={form.subject}
            />
            <textarea
              onChange={handleForm}
              name="message"
              className="border-2 my-3 border-gray-600 rounded-xl w-full h-32 px-3 py-2"
              placeholder="ข้อความ"
              value={form.message}
            />
            <button
              onClick={sendEmail}
              disabled={!canSubmit}
              // className={"bg-[#37c257] hover:bg-[#218838] text-black font-bold py-2 px-6 rounded-xl mt-2 mb-2"}
              className={styleSubmit}
            >
              ส่ง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
