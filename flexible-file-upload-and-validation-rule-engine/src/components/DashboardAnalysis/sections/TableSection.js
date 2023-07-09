import React from 'react';
import PageHeading from '../../PageHeading/PageHeading';
import TestTable from '../../TestTable/TestTable';

const TableSection = (props) => {
  return (

    // const classes = {
    //   'required': 'bg-red-600',
    //   'unique': 'bg-yellow-500',
    //   'minLength': 'bg-green-400',
    //   'maxLength': 'bg-blue-500',
    //   'type': 'bg-pink-600',
    //   'multiple': 'bg-purple-600',
    //   'column mismatch': 'bg-blue-300'
    // }
    <>
      <PageHeading heading="Data Table" />
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
      {props ? <TestTable {...props} /> : null}
    </>
  )
}

export default TableSection;

