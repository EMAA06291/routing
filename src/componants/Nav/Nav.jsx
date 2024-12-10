import React from 'react'
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
export default function Nav() { 
  return (
    <> <Navbar  className="bg-[#205677] py-3 ">
      <span className="whitespace-nowrap font-semibold text-slate-50 text-4xl">Start Framework
      </span>
  
   
    <Navbar.Collapse> <div className="flex md:order-2 text-white">
      <Navbar.Toggle  />
    </div>
      <Link to="/About"  className=' text-slate-50 text-xl  no-underline focus-effect
'>
        About
      </Link>
      <Link to="/Portfolio" className=' text-slate-50 text-xl no-underline focus-effect'>portfolio</Link>
      <Link to="/Contact" className=' text-slate-50 text-xl no-underline focus-effect'>
      
contact</Link>
 
    </Navbar.Collapse>
  </Navbar></>
   );
 }
  
