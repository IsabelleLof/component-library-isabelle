// src/App.jsx
// import React from "react";
import Alert from "../components/Alert";
//import Picture from "../components/Picture";
import { SlCheck, SlBell } from "react-icons/sl";
//import { WiCloud, WiDaySunny, WiDayRain } from "react-icons/wi";
import { FcInfo, FcOk, FcFlashOn, FcHighPriority } from "react-icons/fc";

export default function CustomAlert() {
  return (
    <div>
      <div className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
        <h1>React Alert Component</h1>
        <h2>Props: color, bgColor, icon, text</h2>
        <Alert
          bgColor="#fde99a"
          textColor="#483D8B"
          icon={FcHighPriority}
          text={"Warning!"}
        />
        <Alert
          bgColor="#88ad72"
          textColor="#A41051"
          icon={FcOk}
          text={"Checked!"}
        />
        <Alert
          bgColor="#ffffff"
          textColor="#2800cc"
          icon={FcInfo}
          text={"Info!"}
        />
        <Alert
          bgColor="#ff0000"
          textColor="#2800cc"
          icon={FcFlashOn}
          text={"Danger!"}
        />
      </div>
    </div>
  );
}
