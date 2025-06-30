
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosArrowForward } from "react-icons/io";

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('https://e-learning-udys.onrender.com/api/getevents')
          .then(response => {
            setEvents(response.data.Events);
          })
          .catch(error => {
            console.error('Error fetching events:', error);
          });
      }, []);
    
    
  return (
    <>
    <div className="events mt-44" id="events">
  <div className="text-center mb-4">
    <h6 className="text-[#7a6ad8] text-sm font-semibold">SCHEDULE</h6>
    <h2 className="text-4xl font-semibold">Upcoming Events</h2>
  </div>
  <div className="item m-auto p-16">
    {events.map((event, index) => (
      <div
        key={index}
        className={`sub-item flex justify-between items-center bg-[#f1f0fe] 
          rounded-3xl h-36 w-[90%] ${index > 0 ? 'mt-32' : ''}`} >
        <div className="subs">
          <div className="item-image w-full overflow-hidden ml-7">
            <img src={event.thumbnail} className="left-0 rounded-3xl top-[-70] max-w-64" />
          </div>
        </div>
        <div className="text flex gap-8 h-20 w-full justify-between items-center ml-16">
          <div>
            <span className="text-[#7a6ad8] text-sm bg-white rounded-3xl h-6 w-6 p-2 mb-6 font-semibold">
              {event.course}
            </span>
            <h4 className="mt-4 font-semibold text-xl whitespace-nowrap">{event.task}</h4>
          </div>
          <div>
            <span className="text-sm">Date:</span>
            <h6 className="text-[#7a6ad8] font-semibold whitespace-nowrap">{event.date}</h6>
          </div>
          <div>
            <span className="text-sm">Duration:</span>
            <h6 className="text-[#7a6ad8] font-semibold whitespace-nowrap">{event.duration}</h6>
          </div>
          <div>
            <span className="text-sm">Price:</span>
            <h6 className="text-[#7a6ad8] font-semibold whitespace-nowrap">{event.price}</h6>
          </div>
          <div className="arrow flex items-center">
            <IoIosArrowForward className="bg-[#7a6ad8] text-sm p-5 text-white
             w-16 h-28 rounded-l-full" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Events
