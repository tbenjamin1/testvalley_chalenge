import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  items-center justify-center border-b border-gray-200 w-full  bg-black nav-container'>
        <div className='w-9/12 flex items-center justify-between my-4 sub-nav-container '>
            <div className='flex flex-row gap-8'>
                <span className=' text-green-400 font-bold text-xl'>TestValley</span>
                <span><img src="menu.svg" alt="" /></span>
                <span>category</span>
            </div>
            <div className='search flex flex-row justify-center items-center border border-gray-300 p-2'>
                <span>
                    <img src="search.svg" alt="" />
                </span>
                <span className='ml-2 '>
                    <input type="text" className=' w-96 input' placeholder={`If you're wondering whether to buy it or not`} />
                </span>
            </div>
            <div className='flex flex-row gap-6'>
                <span>
                    <img src="home-event.svg" alt="" />
                </span>
                <span>
                    Login / Sign up
                </span>
            </div>

        </div>
    </div>
  )
}

export default Navbar