// import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4 md:py-8 px-4 md:px-4 align ">
        <Link to="/">OOO<div className="flex">
            
        </div></Link>
      <div className="items-center flex justify-end ... ">
        <ul className="md:flex gap-4 end-2 flex text-slate-500 font-bold text-1xl sm:text-1xl lg:text-2xl tracking-tight text-left ">
          <Link to="/buttons">
            <li>Buttons</li>
          </Link>
          <Link to="/alerts">
          <li>Alerts</li></Link>
          <Link to="/badgets">
          <li>Badgets</li></Link>
          <Link to="/cards">
          <li>Cards</li></Link>
        </ul>
      </div>
    </header>
  );
}
