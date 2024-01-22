// import React from 'react';
// import { MdDashboard } from "react-icons/md";
// import { IoTrashBin } from "react-icons/io5";
// import { FaWater } from "react-icons/fa";
// import { FaHouseUser } from "react-icons/fa";

// const linkClasses='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline  active:bg-nuetral-700 text-xl mb-2 rounded-sm'
// const Sidebar = () => {

  
//   return (
//     <div className=' w-60 p-3 flex   flex-col text-white bg-neutral-900'>
//         <div className='flex items-center gap-2 px-1 py-3 '>
//             {/* react icon size 24 */}
//             <span className='text-nuetral-100 text-2xl mb-4'>Digital Door</span></div>
//         <div className='flex-1 flex-row'>
//         <div className={linkClasses}><MdDashboard/><button>Show all</button></div>
//         <div className={linkClasses}><IoTrashBin/><button>Garbage Tax</button></div>
//         <div className={linkClasses}><FaWater/><button>Water Tax</button></div>
//         <div className={linkClasses}><FaHouseUser/><button>Property Tax</button></div>
//         </div>

//         <div >bottom part</div>
//     </div>
//   )
// }

// export default Sidebar;

import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { IoTrashBin } from 'react-icons/io5';
import { FaWater } from 'react-icons/fa';
import { FaHouseUser } from 'react-icons/fa';
import { useMapContext } from './MapContext';

const linkClasses =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-nuetral-700 text-xl mb-2 rounded-sm';

const Sidebar = () => {
  const { updateFilter } = useMapContext();

  return (
    <div className='w-60 p-3 flex flex-col text-white bg-neutral-900'>
      <div className='flex items-center gap-2 px-1 py-3 '>
        <span className='text-nuetral-100 text-2xl mb-4'>Digital Door</span>
      </div>
      <div className='flex-1 flex-row'>
        <div className={linkClasses}>
          <MdDashboard />
          <button onClick={() => updateFilter('all')}>Show all</button>
        </div>
        <div className={linkClasses}>
          <IoTrashBin />
          <button onClick={() => updateFilter('unpaidGarbageTax')}>Garbage Tax</button>
        </div>
        <div className={linkClasses}>
          <FaWater />
          <button onClick={() => updateFilter('unpaidWaterTax')}>Water Tax</button>
        </div>
        <div className={linkClasses}>
          <FaHouseUser />
          <button onClick={() => updateFilter('unpaidLandTax')}>Property Tax</button>
        </div>
      </div>
      <div>bottom part</div>
    </div>
  );
};

export default Sidebar;
