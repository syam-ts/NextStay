import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className="bg-blue-950 text-white flex pl-44 gap-16 h-36"> 
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
  )
}
