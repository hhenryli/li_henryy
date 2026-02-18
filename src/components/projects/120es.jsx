import React from "react";
import Church from "../../assets/120/church.jpeg";
import Archive from "../../assets/120/120archive.png";
import Team from "../../assets/120/team.png";

export default function OneTwentyEs() {
  return (
    <div className="bg-yellow-10">
      <div className="w-[50vw] h-full relative flex flex-row justify-start items-center">
          <img 
            src={Church}
            loading='lazy'
            className="w-full h-full object-cover"
          >
          </img>
          <div className="bg-gray-600 opacity-50 text-white w-[20%] p-2 italic text-1xl font-garamond absolute bottom-10 left-10">The Presbyterian Church</div>
          <div className="bg-white-200 text-black w-[20%] p-2 italic uppercase font-bold text-1xl font-garamond absolute top-20 left-10">"We want people to share images and stories of a forgotten past" - 120ES</div>
          <div className="absolute w-[40vw] left-[55vw] h-[90vh] grid grid-row-4 grid-cols-2 m-5 gap-4">
            <div>
              <h1 className="font-garamond text-2xl italic">Project 1: The History of Trenton</h1>
              <div className="bg-black h-[1px] w-[50%] mt-2"></div>
            </div>

            <div className="w-[20%] absolute top-0 right-0">
                <img 
                    src={Team}
                    loading='lazy'
                    className="w-full object-contain"
                  >
                </img>
                <p className="font-inter text-sm text-end">created by henry, brian, and andrew</p>
              </div>

            <div className="col-span-2">
              <h1 className="font-garamond text-9xl">120</h1>
              <h1 className="font-garamond text-6xl">EAST STATE</h1>
              <p className="font-inter italic text-xs">"What Trenton used to look like"</p>
            </div>
            <div className="col-span-2 flex flex-row gap-4">
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <p className="font-garamond first-letter:text-6xl text-m">The 120 East State project is a digital archive created to uncover, preserve, and promote the stories–especially those of marginalized communities– connected to the First Presbyterian Church and the surrounding neighborhoods in Trenton. The archive serves as an accessible tool for community engagement and historical interpretation that empowers the local residents and documents nearly 300 years of rich history.</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-garamond text-m">This web application features a public archive where any user can contribute, explore, and manage historically significant stories and media related to Trenton and the First Presbyterian Church of Trenton. We also provide administrative oversight for content moderation and website management reserved for Admins of the 120 East State organization </p>
                <a className="font-garamond first-letter:text-1xl text-lg underline" href="https://one20es-archive-b05baf7b3364.herokuapp.com/" target="_blank">Check it Out!</a>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}
