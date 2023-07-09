import React from 'react'
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import PageHeading from '../PageHeading/PageHeading';

function DashboardAnalysis(props) {
  console.log('ANALYSIS', props);

  return (
    <div>
      <PageHeading heading="File Report" />
      <React.Fragment>
        <AdminCardSection1 />
        <ChartSection1 />
        {/* <TableSection {...props.values.response}/> */}
        <ChartSection2 />
        <AdminCardSection2 />
      </React.Fragment>
    </div>
  )
}

export default DashboardAnalysis
