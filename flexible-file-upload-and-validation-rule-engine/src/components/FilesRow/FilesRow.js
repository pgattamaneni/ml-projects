import React from 'react'

import { Link } from 'react-router-dom';

import { ReactComponent as CSV } from '../../assets/csv.svg';
import { ReactComponent as TSV } from '../../assets/tsv.svg';
import { ReactComponent as XLS } from '../../assets/xls.svg';

/*Props:
{
  type,
  templateNumber,
  templateDefinition,
  fileName,
  time,
  status,
  uploaded,
  fileStats
}

uploaded: {
  status: true/false,
  link: 
}
*/

function FilesRow(props) {
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" /> */}
              {props.type === 'csv' ? <CSV className="h-10 w-10 "/> : (props.type === 'tsv' ? <TSV alt="tsv" className="h-10 w-10" />: <XLS alt="xls" className="h-10 w-10" />)}
            </div>
            <div className="ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                {/* Template - {props.templateNumber} */}
                Template - 
              </div>
              <div className="text-sm leading-5 text-gray-500">
                {/* <Link to={{
                  pathname: "/dashboard/templates",
                  template: props.templateDefinition
                }}> view </Link>   */}
                view
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          <div className="text-sm leading-5 text-gray-900">{props.fileName}</div>
          <div className="text-sm leading-5 text-gray-500">{props.time}</div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${props.status === 'passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {props.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
          {props.uploaded.status ? <a href={props.uploaded.link}> S3 Link </a> : "No Link"}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
          {props.response.code === 'ERROR' ? <p>Delimeter Mismatch.</p> : (
            
            <Link to={{
              pathname: "/dashboard/file-statistics",
              aboutProps: {
                file: props
              }
            }} className="text-blue-600 hover:text-blue-900 cursor-pointer"
            >Stats</Link>
          
          )}
        </td>
      </tr>
    </>
  )
}

export default FilesRow;