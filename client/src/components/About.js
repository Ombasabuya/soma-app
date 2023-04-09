import React from "react";
import Navbar from "./Navbar";
function About() {
  return (
    <>
    <Navbar />
  <div className="flex flex-row">
  <div className="ml-40">
    <div className="mt-2">
        <h1 className="text-[44px]">Soma App</h1>
    <img className="object-cover h-40 w-96" src="https://trello.com/1/cards/6352455bf4c39c009967a985/attachments/635288c74a99790283d6f2cc/previews/635288c84a99790283d6f2d8/download/aboutus.jpg" alt="about"/>
    </div>
    <div className="text-center w-60">
    <p >“Welcome to Soma app”</p>
    </div>
    <div className="flex flex-row">
    
    <img className="rounded-full object-cover h-36 w-36" src="https://trello.com/1/cards/6352455bf4c39c009967a985/attachments/635288e5c53ace0127a7f7d0/previews/635288e6c53ace0127a7f7d8/download/every.jpg" alt="about"/>
    <div className="ml-8 mt-4">
    <div className="text-[#1D6697] text-[19]">
    But what do we say?
    </div>
    <div className="bg-[#713f12] h-8 w-24 text-center">
    Soma Automated
 </div>
 </div>
    </div>
    </div>
    
    <div className="bg-[#e5e5e5] w-80  text-center ml-80 mt-4 mb-4 ">
    <p >SOMA is one of the most  digital transformation in Africa that has hugely impacted content creators, corporate organizations 
    and government institutions with a consistent call to adopt digital technology in everyday operations.</p>
 </div>
 
 </div>
{/* <div className="bg-[#1D6697] h-36"></div> */}

  </>
  )
}

export default About;