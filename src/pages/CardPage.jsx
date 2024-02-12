//import Card from "../components/Card";
import { CardComponent } from "../components/CardComponent";

export default function CustomCard() {
  return (
    <>
      <div className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
        <h1>React Card Component</h1>
        <h2>props: href, imgAlt, imgSrc, backgroundColor, color, children</h2>
        <div className="container mx-auto grid grid-cols-2 sm:pt-24 lg:pt-32 gap-4">
            
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=1"
            imgAlt="Card Title"
            title="Buttons"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae."
            backgroundColor="#ffffff"
          />
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=3"
            imgAlt="Card Title"
            title="Cards"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae."
            backgroundColor="#0082ff"
          />
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=4"
            imgAlt="Card Title"
            title="Alerts"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae."
            backgroundColor="#A41051"
          />
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=2"
            imgAlt="Card Title"
            title="Badgets"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae."
            backgroundColor="#F88CAE"
          />
        </div>
      </div>
    </>
  );
}
