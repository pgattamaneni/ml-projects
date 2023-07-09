import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import PageHeading from '../PageHeading/PageHeading';
// import NotFound from '../NotFound/NotFound';


const FilePreview = (props) => {

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
    console.log('toprows', props.topRows)
    return {
      columns,
      rows: props.topRows
    }

  }

  return (
    <div className="m-2 md:m-10 flex flex-col">

      <PageHeading heading="File Preview" />
      
      <div className="border-2 p-2">
        <MDBDataTableV5 hover scrollX data={createTable(props)} searchTop searchBottom={false} fullPagination />
      </div>
      
    </div>
  );
}

export default FilePreview;