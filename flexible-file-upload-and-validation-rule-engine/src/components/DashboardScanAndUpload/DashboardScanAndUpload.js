import React, { useState } from 'react';
import axios from 'axios';
import { parse } from 'papaparse';
// import { MDBProgress } from 'mdbreact';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFileItems } from '../../redux/file/file.selector';
import { addFileItems } from '../../redux/file/file.actions';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { selectCurrentUser } from '../../redux/user/user.selector';
import setCurrentUser from '../../redux/user/user.actions';

// import DashboardHeading from '../DashboardHeading/DashboardHeading';

import { ReactComponent as Upload } from '../../assets/upload.svg';
import { ReactComponent as TSV } from '../../assets/tsv.svg';
import { ReactComponent as CSV } from '../../assets/csv.svg';
import { ReactComponent as XLS } from '../../assets/xls.svg';
import { ReactComponent as XLSX } from '../../assets/xlsx.svg';
import DashboardTemplateDefinition from '../DashboardTemplateDefinition/DashboardTemplateDefinition';
import FilePreview from '../FilePreview/FilePreview';
import { Link } from 'react-router-dom';
import PageHeading from '../PageHeading/PageHeading';
// import FilePreview from '../FilePreview/FilePreview';

const DashboardScanAndUpload = (props) => {
  // console.log(props);
  const {currentUser, addFileItems} = props;
  // console.log(fileItems);
  
  const [uploadedFile, setUploadedFile] = useState(null);
  const [ percentage, setPercentage ] = useState(0);
  const [preview, setPreview] = useState({});
  const [highlighted, setHighlighted] = useState(false);
  const bearer = `Bearer ${currentUser.token}`;
  const [uploadButton, setUploadButton] = useState(false);

  const [ showFileReport, setShowFileReport ] = useState(null);
  // const [previousTemplate, setPreviousTemplate ] = useState(true);
  // const [hideMe, setHideMe] = useState(true); //hides when set to false

  const showUploadButton = (val) => {
    setUploadButton(val);
    console.log(val);
  }

  let papaParsed;

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleFileUpload(uploadedFile).then(res => {
      console.log(res.data);

      if(res.data.response.code && res.data.response.code === 'ERROR') {
        NotificationManager.warning(`${res.data.response.error}. use '${res.data.response.delimiter}'`);
      }
      setPercentage(100);
      addFileItems(res.data);
      setShowFileReport(res.data);
    }).catch(err => {
      console.log(err);
      NotificationManager.warning(`This file cannot be uploaded.`);
    });
  }


  const handleFileUpload = (file) => {
    const url = 'http://localhost:8001/users/file';

    const userSchema = {
      Username: {
          type: 'integer',
          required: true,
          maxLength: 15
      },
      Identifier: {
          type: 'integer',
          required: true,
      },
      'First name': {
          type: 'string',
          required: true,
      },
      'Last name': {
          type: 'string',
          required: false
      },
      delimiter: ';',
      scan: false
    }

    const formData = new FormData();
    formData.append('userSchema', userSchema);
    formData.append('file', file);


    // const blob = new Blob([userSchema], {
    //   type: 'application/json'
    // })


    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': bearer
      },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor(loaded*100/total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
      
        if(percent < 94) {
          setPercentage(percent);
        }
      }
    }

    return axios.post(url, formData, config);
  }

  const handleFileChange = async e => {
    console.log(e.target.files[0]);
    const f = e.target.files[0];
    console.log(f);
    
    if(f) {
      const text = await f.text();
      papaParsed = parse(text, {
        header: true
      });
      setPreview({
        headers: papaParsed.meta.fields,
        data: papaParsed.data.splice(0, 5)
      })
      console.log('papaparse', papaParsed.meta.fields);
      setUploadedFile(f);
      // console.log('file:', papaParsed);
    } else {
      NotificationManager.warning('Please choose a file of type csv/tsv/xlsx');
    }
  }

  const handleDropChange = async e => {
    console.log(e.dataTransfer.files[0]);
    const f = e.dataTransfer.files[0];

    if(f.type === 'application/vnd.ms-excel' || f.type === 'application/octet-stream' || f.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || f.type === 'application/x-excel' || f.type === 'application/x-msexcel' || f.type === 'application/excel' || (f.type === '' && f.name.split('.')[1] === 'tsv')) {
      const text = await f.text();
      papaParsed = parse(text, {
        header: true
      });
      setPreview({
        headers: papaParsed.meta.fields,
        data: papaParsed.data.splice(0, 5)
      })
      console.log('papaparse', papaParsed);
      setUploadedFile(f);
      // console.log('file:', papaParsed);
    } else {
      NotificationManager.warning('Please choose a file of type csv/tsv/xls');
    }
  }

  const whichType = () => {
    switch(uploadedFile.type) {
      case 'application/vnd.ms-excel':
        if(uploadedFile.name.split('.')[1] === 'csv') {
          return (
              <>
                <CSV className="h-20 w-20"/>
                <div className="flex flex-col lg:ml-4">
                  <div>
                    <span className="font-bold">File Name:</span> {uploadedFile.name} 
                  </div>
                  <div>
                    <span className="font-bold">Size:</span> {uploadedFile.size / 1048576} MB.
                  </div>
                </div>
              </>
            )
        } else {
          return (
            <>
              <XLS className="h-20 w-20"/>
              <div className="flex flex-col lg:ml-4">
                <div>
                  <span className="font-bold">File Name:</span> {uploadedFile.name} 
                </div>
                <div>
                  <span className="font-bold">Size:</span> {uploadedFile.size / 1048576} MB.
                </div>
              </div>
            </>
          )
        }
      case 'application/octet-stream':
        return (
          <>
            <TSV className="h-20 w-20"/>
            <div className="flex flex-col lg:ml-4">
              <div>
                <span className="font-bold">File Name:</span> {uploadedFile.name} 
              </div>
              <div>
                <span className="font-bold">Size:</span> {uploadedFile.size / 1048576} MB.
              </div>
            </div>
          </>
        )
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return (
          <>
            <XLSX className="h-20 w-20"/>
            <div className="flex flex-col lg:ml-4">
              <div>
                <span className="font-bold">File Name:</span> {uploadedFile.name} 
              </div>
              <div>
                <span className="font-bold">Size:</span> {uploadedFile.size / 1048576} MB.
              </div>
            </div>
          </>
        )
      default:
        return (
          <>
            <TSV className="h-20 w-20"/>
            <div className="flex flex-col lg:ml-4">
              <div>
                <span className="font-bold">File Name:</span> {uploadedFile.name} 
              </div>
              <div>
                <span className="font-bold">Size:</span> {uploadedFile.size / 1048576} MB.
              </div>
            </div>
          </>
        )
    }
  }

  // const fetchFiles = () => {
  //   const url = 'http://localhost:8001/users/file';

  //   axios.get(url, {
  //     headers: {
  //       'Authorization': bearer
  //     }
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => {
  //     console.log(err)
  //     NotificationManager.warning('Error in fetching of files. Check if server is running.')
  //   });
  // }

  // const showPrevButton = () => {
  //   return (uploadedFile && hideMe && previousTemplate);
  // }

  // const showDashboardTemplate = () => {
  //   return (uploadedFile && !previousTemplate);
  // }
  
  return (

    <div className={`flex flex-col justify-center items-center`}>
      <PageHeading heading="File Upload" />
      <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
        <form onSubmit={onFormSubmit} className="w-full flex flex-col justify-center lg:w-4/5 ">
          <div name="file"
            className={`p-6 my-2 py-20 mx-4 h-full flex flex-col text-gray-500 text-2xl justify-center items-center border-4 border-dashed ${highlighted ? 'bordere-green-600 bg-green-100': 'border-gray-400'}`}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragEnter={() => {
              setHighlighted(true);
            }}
            onDragLeave={() => {
              setHighlighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighlighted(false);
              console.log(e.dataTransfer.files);
              handleDropChange(e);
            }}
          >
            <Upload className="h-40 w-32 ml-2"/>
            <div className="-ml-1">Drag 'n' Drop</div>
            <div className="-ml-1">or</div>
          <input type="file" id="files" onChange={handleFileChange} name="file" className="mx-4 hidden"/>
          <label htmlFor="files" className="border-2 border-gray-800 p-2">Choose File</label>
          </div>

          <div className="w-full  flex justify-center">
          {/* {
            percentage ? (
              <div className="border-2 border-gray-200 my-4 flex justify-start w-40">
                <div className="bg-green-400 h-full flex justify-center items-center" style={{
                  width: `${percentage}`
                }}>{percentage ? percentage : ''}</div>
              </div>
            ): null
          } */}
        </div>
        <div className="my-8 flex justify-around items-center lg:justify-center  w-full ">
          {
            uploadedFile ? whichType() : null
          }
        </div>
        {
          uploadedFile ? <FilePreview headers={preview.headers} topRows={preview.data} /> :null
        }

        </form>
        {/* {
          (showPrevButton()) ? (
            <div className="flex items-center justify-center">
                <button className="my-8 mx-auto py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 w-40" 
                onClick={() => {
                  setHideMe(false);
                  setUploadButton(true);
                }}
                >
                  Yes
                </button>
                <button className="my-8 mx-auto py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700 w-40" onClick={setPreviousTemplate(false)}>No</button>
            </div>
          ) : null
        } */}
        {
          (uploadedFile)? <DashboardTemplateDefinition headers={preview.headers} showUploadButton={showUploadButton}/>:null
        }
        <div className="flex justify-center">
          {
            uploadedFile ? <button className="my-8 mx-auto py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 w-40" onClick={onFormSubmit}>Upload</button>: null
          }
          {
            showFileReport ? (<div className="text-2xl text-green-400">Uploaded!</div>) : null
          }
          {
            showFileReport ? (<Link to={{
              pathname: "/dashboard/file-report",
              aboutProps: {
                file: showFileReport
              }
            }} className="my-8 mx-auto py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 w-40 cursor-pointer"
            >Stats</Link>): null
          }
        </div>

      </div>
      <div className="flex justify-center font-bold text-red-700 ">
        <NotificationContainer />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  fileItems: selectFileItems
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  addFileItems: file => dispatch(addFileItems(file))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScanAndUpload);