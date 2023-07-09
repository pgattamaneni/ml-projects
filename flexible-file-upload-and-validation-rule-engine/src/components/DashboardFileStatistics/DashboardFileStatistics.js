import React from 'react'
import DashboardAnalysis from '../DashboardAnalysis/DashboardAnalysis'
import NotFound from '../NotFound/NotFound'

function DashboardFileStatistics(props) {

  const handleProp = () => {
    if(props.location.aboutProps) {
      return true;
    }
    return false;
  }

  return (
    <div className="my-4 mx-2 md:mx-10">
      {handleProp() ? (
        <div className="flexible-content">
          <main id="content" className="p-5">
            <DashboardAnalysis values={props.location.aboutProps.file}/>
          </main>
        </div>
        ): <div className="text-3xl flex w-full justify-center items-center">No File Choosen</div>
      }

    </div>
  )
}

export default DashboardFileStatistics;