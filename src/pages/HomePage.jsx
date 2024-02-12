// import React from "react";
//import Card from "../components/Card";
import Button from "../components/Button";
import { CardComponent } from "../components/CardComponent";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      {/* <div className="absolute inset-0 bg-bottom bg-no-repeat bg-[url('./assets/backgroundimage.jpg')] bg-[size:50rem]" > */}
      <section className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
        <h2 className="text-slate-700 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left mb-4">
          Start building your app now
        </h2>
        <p className="leading-relaxed ... text-slate-600">
          An open source component library optimized for fast development, easy
          maintenance, and accessibility. Just import and go—no configuration
          required.
        </p>
        <Link to="/buttons"><Button
          color="#ffffff"
          height={60}
          width={110}
          disabled={false}
          title="Get Started"
          backgroundColor="rgb(0, 130, 255)"
        /></Link>
        <Button
          color="#ffffff"
          height={60}
          width={110}
          disabled={false}
          title="Playground"
          backgroundColor="pink"
        />
        {/* <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none ... rounded text-cyan-50">
          Get Started
        </button>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none ... rounded text-cyan-50">
          Playground
        </button> */}
        <p></p>
      </section>
      <div className="container mx-auto grid grid-cols-4 sm:pt-24 lg:pt-32 gap-4">
        <Link to="/buttons"><CardComponent
          imgScr="https://source.unsplash.com/random/200x200?sig=1"
          imgAlt="Card Title"
          title="Buttons"
          description=""
          backgroundColor="#ffffff"
        /></Link>
        <Link to="/cards"><CardComponent
          imgScr="https://source.unsplash.com/random/200x200?sig=3"
          imgAlt="Card Title"
          title="Cards"
          backgroundColor="#ffffff"
        /></Link>
        <Link to="/alerts"><CardComponent
          imgScr="https://source.unsplash.com/random/200x200?sig=4"
          imgAlt="Card Title"
          title="Alerts"
          backgroundColor="#ffffff"
        /></Link>
        <Link to="/badgets"><CardComponent
          imgScr="https://source.unsplash.com/random/200x200?sig=2"
          imgAlt="Card Title"
          title="Badgets"
          backgroundColor="#ffffff"
        /></Link>
      </div>
      {/* </div> */}
    </>
  );
}
