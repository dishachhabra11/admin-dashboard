

import React from 'react'
import Map from './Map';
import Piechart from './Piechart';
import HBarChart from './HBarChart';
import Speedometer from './Speedometer';



const Dashboard = ({setMap}) => {
  return (
   <>
   <div className='flex flex-col '>
    
    <div className='flex flex-row gap-4 w-full'>
        <Map setMap={setMap}/>
        <Piechart/>
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