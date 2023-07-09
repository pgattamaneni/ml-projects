import React from 'react'
import DashboardHeading from '../../components/DashboardHeading/DashboardHeading';
import { selectFileItems } from '../../redux/file/file.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import FilesRow from '../../components/FilesRow/FilesRow';

//svg : tsv and csv

function Dashboard(props) {
  const fileItems = props.fileItems;
  console.log(fileItems);

  const allRows = fileItems.map(file => <FilesRow key={file.fileName} {...file}/>)
  // const allRows = [];
  const totalFiles = fileItems.length;
  const passed = fileItems.filter(file => file.status === 'passed').length;
  const failed = totalFiles - passed;
  // const totalFiles = 0;
  // const passed = 0;
  // const failed = 0;

  return (
    <div className="flex flex-col mx-8 lg:mx-32">
      <DashboardHeading heading="Your Files"/>
      <div className="mb-4 flex flex-col items-center md:flex-row justify-center text-2xl">
        <div className="text-black md:mr-3">Total Files: {totalFiles}</div>
        <div className="text-green-500 md:mx-3">Passed: {passed}</div>
        <div className="text-red-500 md:ml-3">Failed: {failed}</div>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-4">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider ">
                    Template
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    File Details
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Data Store
                  </th>
                  <th className="px-6 py-3 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allRows.length ? allRows : <tr><td><p className="text-green-500 text-xl">No Files Uploaded</p></td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>

  )
}

const mapStateToProps = createStructuredSelector({
  fileItems: selectFileItems 
})

export default connect(
  mapStateToProps
)(Dashboard);
