// src/App.jsx
// import React from "react";
import Alert from "../components/Alert";
//import Picture from "../components/Picture";

export default function CustomAlert() {
  return (
    <div>
      <div className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
        <h1>React Alert Component</h1>
        <Alert
          bgColor="#fde99a"
          textColor="#483D8B"
          // icon={SlCheck}
          text={"Warning!"}
        />
        <Alert
          bgColor="#88ad72"
          textColor="#A41051"
          // icon={SlMagicWand}
          text={"Checked!"}
        />
        <Alert
          bgColor="#0082ff"
          textColor="#2800cc"
          // icon={SlBell}
          text={"Info!"}
        />
        <Alert
          bgColor="#ff0000"
          textColor="#2800cc"
          // icon={SlBell}
          text={"Danger!"}
        />
      </div>
    </div>
  );
}
