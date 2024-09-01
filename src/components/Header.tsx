import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed , faPlane , faCar , faTaxi , faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range'
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { format } from 'date-fns'

export default function Header() {

    const [openDate, setOpenDate] = useState(false)

const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date,
        key: 'selection'
    }
])


const [openOptions, setOpenOptons] = useState(false)
const [options, setOptions] = useState({
    adult: 1, 
    children: 0,
    room: 1
})

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
        <div className="flex p-1 gap-20 ml-44 bg-white mr-96 rounded-sm border border-yellow-400"> 
            <FontAwesomeIcon className="" icon={faBed} />
            <input type="text" className="cursor-pointer" placeholder="Where are you going" /> 
          <div >
            <FontAwesomeIcon className="" icon={faCalendarDays} />
           <span onClick={() => setOpenDate(!openDate)} className="cursor-pointer pl-3">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
         { openDate &&  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />}
          </div>
          <div>
            <FontAwesomeIcon className=" " icon={faPerson} />
            <span className="pl-3 cursor-pointer">{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
               <div>
                <span>
                    Adults
                </span>
                <button> - </button>
                <span> 1 </span>
                <button> + </button>
               </div>
          </div>
          <div className="ml-60">
                  <button className="bg-sky-600 p-1 text-white border border-white">Search</button>
          </div>
        </div>
      </div>
    </>
  )
}
