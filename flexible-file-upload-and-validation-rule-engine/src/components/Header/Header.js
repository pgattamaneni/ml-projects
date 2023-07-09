import React, {useState} from 'react'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

import DellLogo from '../../assets/delllogo.svg';

// import { connect } from 'react-redux'

// const styles = {
//   header: "flex justify-between py-2 bg-blue-500",
//   product: "flex px-4",
//   logo: "mr-4",
//   links: "text-gray-700"
// }

function Header() {

  const [solutions, setSolutions] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (  
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link to="/" className="flex">
              <img className="h-8 w-auto sm:h-10" src={DellLogo} alt="Workflow" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ${mobileMenu ? 'bg-gray-100 text-gray-500': ''} transition duration-150 ease-in-out`}
              onClick={() => {
                setMobileMenu(!mobileMenu)
              }}
            >
              {/* <!-- Heroicon name: menu --> */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
            </div>

        </nav>
        <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <Link to="/signin" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            Sign in
          </Link>
          <span className="inline-flex rounded-md shadow-sm">
            <Link to="/signup" className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>

    {/* <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
        {/* <Transition
        show={mobileMenu}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        > */}
        {mobileMenu?
        (<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white z-10">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
            <div className="lg:w-0 lg:flex-1">
              <Link to="/" className="flex">
                <img className="sm:h-10 w-6/12 -ml-4 mb-2" src={DellLogo} alt="Workflow" />
              </Link>
            </div>
              <div className="-mr-2">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => {
                    setMobileMenu(!mobileMenu)
                  }}
                >
                  {/* <!-- Heroicon name: x --> */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            </div>
            <div className="space-y-6">
              <span className="w-full flex rounded-md shadow-sm">
                <Link to="/signup" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                  onClick={() => setMobileMenu(false)}
                >
                  Sign up
                </Link>
              </span>
              <p className="text-center text-base leading-6 font-medium text-gray-500">
                Already a user?
                <Link to="/signin" className="text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                  onClick={() => setMobileMenu(false)}
                >
                  &nbsp;Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ):null
  }
  {/* </Transition> */}

  
</div>

  )
}

//state: root-reducer

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// })

export default Header;