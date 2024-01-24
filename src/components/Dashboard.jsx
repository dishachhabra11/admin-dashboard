import React, { useState, useEffect } from 'react';
import Map from './Map';
import Piechart from './Piechart';
import HBarChart from './HBarChart';
import Speedometer from './Speedometer';
import {ArcElement,Chart} from 'chart.js'


const Dashboard = ({ setMap }) => {

  const [selectedTaxType, setSelectedTaxType] = useState(null);

  const handleTaxTypeClick = (taxType) => {
    setSelectedTaxType(taxType);
  };

  

  return (
    <>
      <div className='flex flex-col '>
        <div className='flex flex-row gap-4 w-full'>
          <div>
          <Map setMap={setMap} />
          </div>
          <div>
          <button onClick={() => handleTaxTypeClick(null)}>All</button>
          <button onClick={() => handleTaxTypeClick('Property Tax')}>Property Tax</button>
          <button onClick={() => handleTaxTypeClick('Water Tax')}>Water Tax</button>
          <button onClick={() => handleTaxTypeClick('Garbage Tax')}>Garbage Tax</button>
          <Piechart selectedTaxType={selectedTaxType} />
          </div>
        </div>
        <div className='flex flex-row gap-1/4 w-full'>
          <Speedometer selectedTaxType={selectedTaxType} />
          <HBarChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
