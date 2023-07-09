import React, {useState} from 'react'
import { Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
// import {ReactComponent as PixemployerLogo} from '../../assets/Pixemployer.svg';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import setCurrentUser from '../../redux/user/user.actions';
import { setFileItems } from '../../redux/file/file.actions';

function DashboardHeader(props) {

  const {currentUser, setCurrentUser, setFileItems} = props;
  const [hidden, setHidden] = useState(true);

  const [menu, setMenu] = useState(false);
  
  const bearer = `Bearer ${currentUser.token}`;
  
  const url = "http://localhost:8001/users/logout";
    
  const handleSignOut = () => {
    fetch(`${url}/`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "Authorization": bearer
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log('signedout');
      setFileItems([]);
      setCurrentUser(null);
    })
    .catch(err => console.log('Could not perform signout'));

    setHidden(true);
  }

  return (
    <div className="z-50">
      <nav className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" onClick={() => setMenu(!menu)}>
              {/* <!-- Mobile menu button--> */}
              <button className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none ${menu ? 'bg-gray-700 text-white': null} transition duration-150 ease-in-out`} aria-label="Main menu" aria-expanded="false" >
                {/* <!-- Icon when menu is closed. -->
                <!--
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg className={`${menu? 'hidden':'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* <!-- Icon when menu is open. -->
                <!--
                  Heroicon name: x

                  Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg className={`${menu? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" /> */}
                <img className="block h-10 w-auto" src={process.env.PUBLIC_URL + '/429053.png'} alt="DELL LOGO"/>
                {/* <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg" alt="Workflow logo" /> */}
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex">
                  <NavLink exact to="/dashboard" className="sm:text-xs px-3 py-2 rounded-md md:text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700">Your Files</NavLink>
                  <NavLink exact to="/dashboard/scan-and-upload" className="sm:text-xs ml-4 px-3 py-2 rounded-md md:text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none  transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700">Scan And Upload</NavLink>
                  <NavLink exact to="/dashboard/file-report" className="sm:text-xs ml-4 px-3 py-2 rounded-md md:text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none  transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700">File Report</NavLink>
                  <NavLink exact to="/dashboard/file-statistics" className="sm:text-xs ml-4 px-3 py-2 rounded-md md:text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700">File Statistics</NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
                {/* <!-- Heroicon name: bell --> */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button className={`flex text-sm border-2 border-transparent rounded-full focus:outline-none  transition duration-150 ease-in-out ${hidden ? null: 'border-white'}`} id="user-menu" aria-label="User menu" aria-haspopup="true" onClick={() => setHidden(!hidden)}>
                    <img className="h-8 w-8 rounded-full" src={process.env.PUBLIC_URL + '/User-Icon.jpg'} alt="User"/>
                  </button>
                </div>
                {/* <!--
                  Profile dropdown panel, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                --> */}
                <Transition
                  show={!hidden}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" >
                    <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      <NavLink exact to="/dashboard/profile" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem" onClick={() => setHidden(true)}>Your Templates</NavLink>
                      <NavLink exact to="/dashboard/settings" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem" onClick={() => setHidden(true)}>Settings</NavLink>
                      <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer" role="menuitem" onClick={() => handleSignOut()}>Sign out</span>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>

    {/* <!--
      Mobile menu, toggle classNamees based on menu state.

      Menu open: "block", Menu closed: "hidden"
    --> */}
        <Transition
          show={menu}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        <div className={`${menu ? 'block sm:block': 'hidden sm:hidden'}`}>
          <div className="px-2 pt-2 pb-3">
            <NavLink exact to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700" onClick={() => setMenu(false)}>Your Files</NavLink>
            <NavLink exact to="/dashboard/scan-and-upload" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700" onClick={() => setMenu(false)}>Scan And Upload</NavLink>
            <NavLink exact to="/dashboard/file-report" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700" onClick={() => setMenu(false)}>File Report</NavLink>
            <NavLink exact to="/dashboard/file-statistics" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out" activeClassName="text-white bg-blue-700" onClick={() => setMenu(false)}>File Statistics</NavLink>
          </div>
        </div>
        </Transition>
      </nav>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setFileItems: value => dispatch(setFileItems(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(DashboardHeader);
