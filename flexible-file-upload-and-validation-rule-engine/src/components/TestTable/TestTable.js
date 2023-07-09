import React, { useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import ErrorBox from '../ErrorBox/ErrorBox';
// import PageHeading from '../PageHeading/PageHeading';
// import NotFound from '../NotFound/NotFound';


const TestTable = (props) => {

  const [errorBox, setErrorBox] = useState(null);

  const testClick = (e, myErrors) => {
    e.preventDefault()
    setErrorBox(myErrors);
  }

  const constructDiv = (value, errors) => {
    let whatismyclass;
    const classes = {
      'required': 'bg-red-600 text-white',
      'unique': 'bg-yellow-500',
      'minLength': 'bg-green-400 text-white',
      'maxLength': 'bg-blue-500 text-white',
      'type': 'bg-pink-600 text-white',
      'multiple': 'bg-purple-600 text-white',
      'date': 'bg-blue-300'
    }

    if(Object.keys(errors).length > 1) {
      whatismyclass = classes['multiple'];
    } else if (errors.required) {
      whatismyclass = classes['required'];
    } else if (errors.type) {
      whatismyclass = classes['type']
    } else if (errors.unique) {
      whatismyclass = classes['unique'];
    } else if (errors.minLength) {
      whatismyclass = classes['minLength'];
    } else if (errors.maxLength) {
      whatismyclass = classes['maxLength']
    } else if (errors.date) {
      whatismyclass = classes['date']
    }

    return <div className={`${whatismyclass} p-1 cursor-pointer`} onClick={(e) => testClick(e, errors)} whatismyclass={whatismyclass}>{value}</div>
  }
  
  const createTable = (props) => {
    console.log(props);
    if(!props.headers) {
      return {
        columns: [],
        rows: []
      }
    }
    let columns = props.headers.map(header => ({
      label: header,
      field: header,
      width: 200
    }))
    
    let rows = props.csvObject.map((row, i) => {
      let rowObject = {};
      props.headers.forEach((header, j) => {
        if(!props.error[i] || !props.error[i][j]) {
          rowObject[header] = row[header];
        } else {
          rowObject[header] = constructDiv(row[header], props.error[i][j]);
        }
      })
      return rowObject;
    })

    return {
      columns,
      rows
    }

  }

  // const widerData = {
  //   columns: [
  //     ...datatable.columns.map((col) => {
  //       col.width = 200;
  //       return col;
  //     }),
  //   ],
  //   rows: [...datatable.rows],
  // };

  return (
    <div className=" m-4 md:m-10 flex flex-col w-full">
      <div className="mb-4 flex justify-center items-center flex-wrap">
        <div className="flex mx-2 items-center my-2">
          <div className="py-1 px-2 bg-red-600">&nbsp;</div>
          <div className="ml-4">required</div>
        </div>
        
        <div className="flex mx-2 items-center my-2">
          <div className="py-1 px-2 bg-yellow-500">&nbsp;</div>
          <div className="ml-4">unique</div>
        </div>
        
        <div className="flex mx-2 items-center my-2">
          <div className="py-1 px-2 bg-pink-600">&nbsp;</div>
          <div className="ml-4">type</div>
        </div>
        
        <div className="flex mx-2 items-center my-2">
          <div className="py-1 px-2 bg-purple-600">&nbsp;</div>
          <div className="ml-4">multiple</div>
        </div>
        
        <div className="flex mx-2 items-center my-2">
          <div className="py-1 px-2 bg-green-400">&nbsp;</div>
          <div className="ml-4">minLength</div>
        </div>

        <div className="flex mx-2 items-center my-2">
          <div className="py-1 px-2 bg-blue-500">&nbsp;</div>
          <div className="ml-4">maxLength</div>
        </div>

        <div className="flex mx-2 items-center my-2">
          <div className="py-1 px-2 bg-blue-300">&nbsp;</div>
          <div className="ml-4">Required Column</div>
        </div>
        
      </div> 
      {/* <PageHeading heading="Data Table" /> */}
      
      <div className="border-2 p-2">
        <MDBDataTableV5 hover scrollX data={createTable(props)} entriesOptions={[5, 10, 20]} entries={5} searchTop searchBottom={false} fullPagination />
      </div>
      {
        !props.headers ? <div> Please select something</div>: null
      }
      <div className="mt-6 justify-center flex items-center">Click on the colored box to view their errors.</div> 
      {
        errorBox ? <ErrorBox myErrors={errorBox}/> : null
      }
    </div>
  );
}

export default TestTable;