import Badge from "../components/Badge";
//import { IconName } from "react-icons/fc";
import { FcLikePlaceholder, FcLike, FcInfo } from "react-icons/fc";

export default function CustomButton() {
  return (
    <>
      <div>
        <div className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
          <h1>React Badge Component</h1>
          <h2>props: size, color, icon, children</h2>
          <Badge
            color={"#0082ff"}
            height={40}
            width={40}
            icon={FcLikePlaceholder}
            iconColor={"#CB214E"}
          />
          <h2>Liked, outlined</h2>
          <Badge
            color={"#F88CAE"}
            height={50}
            width={50}
            icon={FcLike}
            iconColor={"#7F1734"}
          />
          <h2>Liked</h2>
          <Badge
            color={""}
            height={50}
            width={50}
            icon={FcInfo}
            iconColor={"#3a2300"}
          />
          <h2>Info badge</h2>
        </div>
      </div>
    </>
  );
}
