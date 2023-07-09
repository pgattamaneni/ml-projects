import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as TSV} from '../../assets/spreadsheet1.svg';

const SignUp = (props) => {

  const [userCred, setUserCred] = useState({
    email: '',
    password: '',
    name: '',
    token: '',
  })

  const { setUser } = props;

  const [error, setError] = useState(null);

  // const [file, setFile] = useState(null);
  // const [presignedUrl, setPresignedURL] = useState(null);
  const url = "http://localhost:8001/users";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url}/`, {
      method: "POST",
      body: JSON.stringify({
        email: userCred.email,
        password: userCred.password,
        name: userCred.name
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Signed Up');
      console.log(data);
      if(data.name === 'MongoError') {
        setError('Email Already Exists');
      } else {
        setUserCred({
          ...userCred,
          token: data.token
        })

        setUser({
          email: userCred.email,
          token: data.token
        })

      }

      // const bearer = `Bearer ${data.token}`;

      // props.setUser({
      //   email: userCred.email,
      //   token: data.token
      // })

    })
    .catch(err => {
      console.log('Error captured', err);
      setError(err);
    })
  }

  const handleChange = (e) => {
    const{value, name} = e.target;
    setUserCred({
      ...userCred,
      [name]: value
    })
  }

  return (
    <div className="flex flex-auto justify-center items-center w-full mt-4 md:mt-16 xl:mt-28 ">
      
        <div className="flex items-center justify-center pb-8 px-4 sm:px-6 lg:px-8 ">
          <div className=" w-full ">
            {/* <DellLogo className="h-80 w-auto m-auto " /> */}
            <TSV className="h-56 w-auto m-auto" />
            <div>
              <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900 ">
                Create your account
              </h2>
              <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                Already user?
                <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  &nbsp;sign in&nbsp;
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="my-10 mx-2">

              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm mt-2">
                <div>
                  <input onChange={(e) => handleChange(e)} name="name" type="text" aria-label="Name" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Name" required/>
                  {/* <ErrorMessage name="email" component="span" className="text-red-500 text-xs italic" /> */}
                </div>
                <div className="-mt-px">
                  <input onChange={(e) => handleChange(e)} name="email" type="email" aria-label="Email address" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" required/>
                  {/* <ErrorMessage name="email" component="span" className="text-red-500 text-xs italic" /> */}
                </div>
                <div className="-mt-px">
                  <input onChange={(e) => handleChange(e)} aria-label="Password" name="password" type="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" required/>
                  {/* <ErrorMessage name="password" component="span" className="text-red-500 text-xs italic"/> */}
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Sign Up
                </button>
                {
                  error ? (
                    <div>
                      Error Occured: {error}
                    </div>
                  ) : null
                }
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs mt-8 sm:mt-4">
              &copy;2020 Mavens Inc. All rights reserved.
            </p>
          </div>
        </div>
    </div>
  )
}


export default SignUp;

