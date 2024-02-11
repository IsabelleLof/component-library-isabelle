//import Card from "../components/Card";
import { CardComponent } from "../components/CardComponent";

export default function CustomCard() {
  return (
    <>
      <div>
        <h1>React Card Component</h1>
        <div className="grid grid-cols-2 sm:pt-24 lg:pt-32 gap-4">
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=1"
            imgAlt="Card Title"
            title="Buttons"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate."
          />
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=3"
            imgAlt="Card Title"
            title="Cards"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate."
          />
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=4"
            imgAlt="Card Title"
            title="Alerts"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate."
          />
          <CardComponent
            imgScr="https://source.unsplash.com/random/200x200?sig=2"
            imgAlt="Card Title"
            title="Badgets"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate."
          />
        </div>
      </div>
    </>
  );
}
