import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <>
      <div className=" flex justify-center bg-[#205677] items-center ps-10 ">
        <div className=" py-24  flex-col flex text-center text-white  ">
          <h3>LOCATION</h3>
          <span className="py-3">2215 John Daniel Drive</span>
          <span>Clark, MO 65243</span>
        </div>
        <div className="flex  items-center ps-20  flex-col  text-center text-white mx-20  ">
          <h3 >AROUND THE WEB</h3>
          <div>
            <FontAwesomeIcon icon={faFacebook} className="mx-3 border rounded-full p-2 " />
            <FontAwesomeIcon icon={faLinkedin} className="mx-3 border rounded-full p-2 " />
            <FontAwesomeIcon icon={faTwitter} className="mx-3 border rounded-full p-2 " />
            <FontAwesomeIcon icon={faGlobe} className="mx-3 border rounded-full p-2 " />
          </div>
        </div>
        <div className=" flex-col flex text-center text-white  items-center">
          <h3>ABOUT FREELANCER</h3>
          <span className="w-3/4 ">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </span>
        </div>
        <div></div>
        <div></div>
      </div>{" "}
      <div className="bg-[#15384e] py-1 pt-3  ">
        <div className="p ">
          <p className=" text-white text-center  ">
          Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}
