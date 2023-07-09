import React from 'react'
import SignIn from '../../components/SignIn/SignIn'

function SingInPage(props) {
  return (
    <div className="flex flex-auto flex-grow justify-center items-start w-full sm:pt-6 md:pt-16 xl:pt-28 bg-gradient-to-r from-blue-100 to-blue-200">
      <SignIn {...props}/>
    </div>
  )
}

export default SingInPage