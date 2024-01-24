

import React from 'react'
import Map from './Map';
import HBarChart from './HBarChart';
import Speedometer from './Speedometer';
import DonutChart from './Donut';



const Dashboard = ({setMap}) => {
  return (
   <>
   <div className='flex flex-col '>
    
    <div className='flex flex-row gap-4 w-full'>
        <Map setMap={setMap}/>
        <DonutChart/>
    </div>
    <div className='flex flex-row gap-1/4 w-full'>
    <Speedometer/>
      <HBarChart/>
      
        
    </div>
   </div>
   </>

  )
}

export default Dashboard;