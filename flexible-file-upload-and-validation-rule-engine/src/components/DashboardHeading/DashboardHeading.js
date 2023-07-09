import React from 'react'

function DashboardHeading(props) {
  return (
    <div className="flex justify-center text-3xl sm:text-5xl my-8">
      <div className="flex flex-col">
        <h1 className=" text-5xl md:text-6xl font-bold-700 leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">{props.heading} </h1>
        {/* <div className="mt-2 border-t border-gray-200">&nbsp;</div> */}
      </div>
    </div>
  )
}

export default DashboardHeading
