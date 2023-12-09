import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Contact = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#000000",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000000",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: "#000000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000000",
      },
    },
    // Set a lower z-index for the CssTextField
    zIndex: 1,
  });

  return (
    <div id="contact" className="w-full bg-[#f8f9fb] flex justify-center">
      <div className="w-4/5 p-3 border-0 md:px-7 md:grid md:grid-cols-2 2xl:w-3/5 xl:w-4/5">
        <div className="md:h-full md:border-r-2 md:border-black">
          <div className="justify-center font-bold text-2xl mt-2 md:flex md:justify-start md:mb-4">
            ติดต่อเรา
          </div>
          <div className="md:grid md:grid-cols-2">
            <div className="text-left">
              <div className="font-bold my-2">ที่อยู่ :</div>
              <div className="font-bold my-2">เบอร์โทรศัพท์ :</div>
              <div className="font-bold my-2">อีเมล :</div>
            </div>
            <hr className="border-black my-4 md:hidden" />
          </div>
        </div>
        <div className="w-full md:flex md:flex-col md:justify-center">
          <div className="md:mx-4">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                my: 1,
                width: "100%",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <CssTextField label="ชื่อ" id="outlined-size-normal" size="small" />
            <CssTextField label="อีเมล" id="outlined-size-normal" size="small" />
            <CssTextField label="หัวข้อ" id="outlined-size-normal" size="small" />
            <CssTextField label="ข้อความ" id="outlined-size-normal" size="small" multiline rows={4}/>
          </Box>
          <button className="bg-[#ff6060] hover:bg-red-500 text-white font-bold py-2 px-6 rounded-xl mt-4 mb-2">
            ส่ง
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
