import React from 'react';
import PageHeading from '../PageHeading/PageHeading';
import TestTable from '../TestTable/TestTable';

const FileReport = (props) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 pt-0 w-full">
      <PageHeading heading="File Report"/>
      {props.location.aboutProps ? 
        (
          <TestTable className="w-full" {...props.location.aboutProps.file.response}/>
          
        ) : <div>Choose file to view response</div>
      }
    </div>
  )
}

export default FileReport;

