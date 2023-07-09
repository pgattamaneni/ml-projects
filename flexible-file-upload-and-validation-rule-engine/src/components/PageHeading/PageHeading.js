import React from 'react'

function PageHeading(props) {
  return (
    <div className="flex justify-center text-3xl sm:text-5xl mb-12 mt-0">
      <div className="flex flex-col">
      {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">hassle free</span> */}
        <h1 className="text-5xl md:text-6xl font-bold-800 leading-tighter tracking-tighter mb-4 mt-4" data-aos="zoom-y-out">{props.heading} </h1>
        {/* <div className="mt-2 border-t border-gray-200">&nbsp;</div> */}
      </div>
    </div>
  )
}

export default PageHeading
