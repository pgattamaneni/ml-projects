import React, { useState } from 'react'
import axios from 'axios';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import {put} from 'axios';
import { connect } from 'react-redux';
import { ReactComponent as DellLogo} from '../../assets/delllogo.svg';
import { ReactComponent as TSV} from '../../assets/signin.svg';

import { setFileItems } from '../../redux/file/file.actions';
import { setTemplateItems } from '../../redux/userTemplate/userTemplate.actions';
// import { setFileItems } from '../../redux/file/file.actions';

const SignIn = (props) => {
  const { setFileItems } = props;
  const [userCred, setUserCred] = useState({
    email: '',
    password: '',
    token: '',
  })

  // const [file, setFile] = useState(null);
  // const [presignedUrl, setPresignedURL] = useState(null);
  const url = "http://localhost:8001/users";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: userCred.email,
        password: userCred.password
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Signed In');
      console.log(data);
      console.log(data.token);
      setUserCred({
        ...userCred,
        token: data.token
      })

      const bearer = `Bearer ${data.token}`;

      props.setUser({
        email: userCred.email,
        token: data.token
      })

      const url1 = 'http://localhost:8001/users/file';
      
      console.log('from axios');

      axios.get(url1, {
        headers: {
          'Authorization': bearer
        }
      })
      .then(res => {
        console.log('axios', res.data.files);
        console.log('temp', res.data.templates);

        setFileItems(res.data.files);
        setTemplateItems(res.data.templates);
      })
      .catch(err => console.log(err));
      
      // const url2 = 'http://localhost:8001/users/template'
      
      // axios.get(url2, {
      //   headers: {
      //     'Authorization': bearer
      //   }
      // })
      // .then(res => {
      //   console.log('axios template', res);
      //   // setUserTemplateItems(res.data);
      //   console.log(res);
      // }).catch(err => console.log(err))

      // setFileItems
    })
    .catch(err => {
      console.log(err);
    })
  }
  // const bearer = `Bearer ${userCred.token}`;
  // const getDetails = () => {
  //   console.log('getting');
  //   fetch(`${url}/user/`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json; charset=UTF-8",
  //       "Authorization": bearer
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(err => {
  //     console.log('error in making req.');
  //   })
  // }

  const handleChange = (e) => {
    const{value, name} = e.target;
    setUserCred({
      ...userCred,
      [name]: value
    })
  }

  //FILE
  // const handleFileChange = e => {
  //   console.log(e.target.files[0]);
  //   setFile(e.target.files[0]);
  // }

  // const getPresignedURL = e => {
  //   console.log('Gettign URL...');
  //   fetch(`${url}/user/upload`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json; charset=UTF-8",
  //       "Authorization": bearer
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setPresignedURL(data.url);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  // const fileUpload = (myFile) => {
  //   // const formData = new FormData();
  //   // console.log("MYFILE", myFile);
  //   // formData.append('file', myFile);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   }
  //   return put(presignedUrl, myFile, config);
  // }

  // const submitFile = () => {
  //   console.log(file);
  //   fileUpload(file)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  // console.log(props);
  return (
    <div className="flex flex-auto justify-center items-center w-full mt-4 md:mt-16 xl:mt-28">
      
        <div className="flex items-center justify-center pb-8 px-4 sm:px-6 lg:px-8 ">
          <div className=" w-full ">
            {/* <DellLogo className="h-80 w-auto m-auto " /> */}
            <TSV className="h-56 w-auto m-auto" />
            <div>
              <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900 ">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                new user?
                <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  &nbsp;sign up&nbsp;
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="my-10 mx-2">

              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm mt-2">
                <div>
                  <input onChange={(e) => handleChange(e)} name="email" type="email" aria-label="Email address" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" required/>
                  {/* <ErrorMessage name="email" component="span" className="text-red-500 text-xs italic" /> */}
                </div>
                <div className="-mt-px">
                  <input onChange={(e) => handleChange(e)} aria-label="Password" name="password" type="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" required/>
                  {/* <ErrorMessage name="password" component="span" className="text-red-500 text-xs italic"/> */}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                  <label htmlFor="remember_me" className="mt-2 ml-2 block text-sm leading-5 text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-5">
                  <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Sign In
                </button>
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

const mapDispatchToProps = dispatch => ({
  setFileItems: value => dispatch(setFileItems(value)),
  setTemplateItems: value => dispatch(setTemplateItems(value))
})

export default connect(
  null,
  mapDispatchToProps
)(SignIn)

