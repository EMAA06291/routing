import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import pic1 from '../../assets/poert1.png'
import pic2 from '../../assets/port2.png'
import pic3 from '../../assets/port3.png'
export default function Portgolio() {
  return (<>
    <div className=" h-screen content-center ">
    <div className=" flex flex-col flex-wrap  dev-center ">
     
      <h1 className="font-bold text-blue-950 ">PORTFOLIO</h1>
      <div className="flex flex-nowrap gap-3">
            <div className="bg-blue-950 w-28 h-1"></div>
            <FontAwesomeIcon className=" text-blue-950 " icon={faStar} />
            <div className=" bg-blue-950 w-28 h-1 mb-4 "></div>
          </div>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-5   container'>
      <div className='w-1/3 overflow-hidden rounded-2xl col-3'>
<img src={pic3} className=' w-full' alt="" />

      </div>
      <div className='w-1/3 overflow-hidden rounded-2xl col-3'>
<img src={pic1} className=' w-full' alt="" />

      </div>
      <div className='w-1/3 overflow-hidden rounded-2xl col-3'>
<img src={pic2} className=' w-full' alt="" />

      </div>
      <div className='w-1/3 overflow-hidden rounded-2xl col-3'>
<img src={pic3} className=' w-full' alt="" />

      </div>
      <div className='w-1/3 overflow-hidden rounded-2xl col-3'>
<img src={pic1} className=' w-full' alt="" />

      </div>
      <div className='w-1/3 overflow-hidden rounded-2xl col-3'>
<img src={pic2} className=' w-full' alt="" />

      </div>
    </div>
  </div>
</>  )
}
