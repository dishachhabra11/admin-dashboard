import React from 'react'
import Map from './Map';
import Piechart from './Piechart';
import HBarChart from './HBarChart';

const Dashboard = () => {
  return (
   <>
   <div className='flex flex-col gap-4'>
    
    <div className='flex flex-row gap-4 w-full'>
        <Map/>
        <Piechart/>
    </div>
    <div className='flex flex-row gap-4 w-[60%]'>
      <HBarChart/>
        
    </div>
   </div>
   </>

  )
}

export default Dashboard;