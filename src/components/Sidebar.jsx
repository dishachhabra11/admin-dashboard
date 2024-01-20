import React from 'react'

const linkClasses='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline  active:bg-nuetral-700 text-xl mb-2 rounded-sm'
const Sidebar = () => {
  return (
    <div className=' w-60 p-3 flex   flex-col text-white bg-neutral-900'>
        <div className='flex items-center gap-2 px-1 py-3 '>
            {/* react icon size 24 */}
            <span className='text-nuetral-100 text-2xl mb-4'>Digital Door</span></div>
        <div className='flex-1 flex-row'>
        <div className={linkClasses}><button>Show all</button></div>
        <div className={linkClasses}><button>Garbage Tax</button></div>
        <div className={linkClasses}><button>Water Tax</button></div>
        </div>

        <div >bottom part</div>
    </div>
  )
}

export default Sidebar;