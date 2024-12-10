import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
export default function About() {
  return (
    <>
      <div className="bg-[#1abc] h-screen content-center ">
        <div className="container flex flex-col flex-wrap  dev-center ">
          <h1 className="font-bold text-white ">ABOUT COMPONENT</h1>
          <div className="flex flex-nowrap gap-3">
            <div className="bg-white w-28 h-1"></div>
            <FontAwesomeIcon className="text-white " icon={faStar} />
            <div className="bg-white w-28 h-1"></div>
          </div>
          <div className="flex flex-nowrap pt-3 gap-5">
              <p className="text-white w-[400px]">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="text-white  w-[400px]">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
        </div>
      </div>
    </>
  );
}
