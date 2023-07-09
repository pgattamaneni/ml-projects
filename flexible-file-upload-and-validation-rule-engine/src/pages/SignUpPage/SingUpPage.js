import React from 'react'
import SignUp from '../../components/SignUp/SignUp'

function SignUpPage(props) {
  return (
    <div className="flex flex-auto flex-grow justify-center items-start w-full sm:pt-6 md:pt-16 xl:pt-28 bg-gradient-to-l from-blue-100 to-blue-200">
      <SignUp {...props}/>
    </div>
  )
}

export default SignUpPage