import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import image from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="bg-[#1abc] h-screen content-center ">
        <div className="container flex flex-col flex-wrap  dev-center ">
          <img src={image} alt="" className="w-1/4 mb-4" />
          <h1 className="font-bold text-white ">START FRAMEWORK</h1>
          <div className="flex flex-nowrap gap-3">
            <div className="bg-white w-28 h-1"></div>
            <FontAwesomeIcon className="text-white " icon={faStar} />
            <div className="bg-white w-28 h-1"></div>
          </div>
          <div className="  pt-3 ">
            <p className="text-white w-[400px] text-center">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
