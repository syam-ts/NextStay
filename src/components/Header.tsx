import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed , faPlane , faCar , faTaxi , faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className="bg-blue-950 text-white flex pl-44 gap-16 h-20">
        <div>
          <FontAwesomeIcon className="text-white " icon={faBed} />
          <span> Stays </span>
        </div>
        <div>
          <FontAwesomeIcon className="text-white " icon={faPlane} />
          <span> Flights </span>
        </div>
        <div>
          <FontAwesomeIcon className="text-white " icon={faCar} />
          <span> Car rentals </span>
        </div>
        <div>
          <FontAwesomeIcon className="text-white " icon={faBed} />
          <span> Attractions </span>
        </div>
        <div>
          <FontAwesomeIcon className="text-white " icon={faTaxi} />
          <span> Airport taxis </span>
        </div>
      </div>
      <div className="bg-blue-950 h-72">
        <div className="font-bold text-2xl pl-44 text-white">
          <h1>A lifetime of discounts? It's Genius.</h1>
        </div>
        <div className="pl-44 text-white pt-5">
          <p>
            Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Lamabooking account
          </p>
        </div>
        <div className="pl-44 text-white pt-5 pb-5">
          <button className="bg-sky-600 p-1">Sign in / Register</button>
        </div>
        <div className="flex gap-20 ml-44 bg-white mr-96 rounded-sm border border-yellow-400"> 
            <FontAwesomeIcon className="" icon={faBed} />
            <input type="text" className="border border-gray-950" placeholder="Where are you going" /> 
          <div className="border border-gray-900">
            <FontAwesomeIcon className="" icon={faCalendarDays} />
           <span className=" pl-3">date to date</span>
          </div>
          <div className="border border-gray-900">
            <FontAwesomeIcon className=" " icon={faBed} />
            <span className="pl-3">2 adult 2 chldren 1 room</span>
          </div>
        </div>
      </div>
    </>
  )
}
