// import React from 'react'

// export default function Category({courses}) {
//   return (
//     <>
      
//         <div  className="design-box">
            
//             <div className="design-images">
//               <div className="price">
//               <h6>{courses.price}</h6>
//               </div>
//               <div className="choices">
//                     <span>{courses.category}</span>
//               </div>
             
//             <img src={courses.img} alt={courses.title} />
//             </div>
            
             
//             <p>{courses.name}</p>
//             <h4 className='hover:text-[#7a6ad8] '>{courses.involved}</h4>
//           </div>
//     </>
//   )
// }

import React from 'react';

export default function Category({ courses }) {
  return (
    <>
      <div className="design-box">
        <div className="design-images">
          <div className="price">
            <h6>{courses.price}</h6>
          </div>
          <div className="choices">
            <span>{courses.course}</span>
          </div>
          <img src={courses.thumbnail} />
        </div>
        <p className='mt-10'>{courses.name}</p>
        <h4 className="hover:text-[#7a6ad8]">{courses.involved}</h4>
      </div>
    </>
  );
}

