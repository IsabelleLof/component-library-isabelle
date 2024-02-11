import Badge from "../components/Badge";
// import { SlCheck, SlMagicWand, SlBell } from "react-icons/sl";
// import { WiCloud, WiDaySunny, WiDayRain } from "react-icons/wi";

export default function CustomButton() {
  return (
    <>
      <div>
        <div className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
          <h1>React Badge Component</h1>
          <Badge
            color={"#ffc0cb"}
            height={60}
            width={110}
            // icon={WiCloud}
            iconColor={"#CB214E"}
          />
          <Badge
            color={"#F88CAE"}
            height={50}
            width={100}
            // icon={WiDaySunny}
            iconColor={"#7F1734"}
          />
          <Badge
            color={"#997379"}
            height={40}
            width={90}
            // icon={WiDayRain}
            iconColor={"#3a2300"}
          />
        </div>
        ;
      </div>
    </>
  );
}
