import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  items-center justify-center border-b border-gray-200 w-full  bg-black nav-container'>
        <div className='w-9/12 flex items-center justify-between my-4 sub-nav-container '>
            <div className='TestValley'>
                <span className=' valley-logo'>TestValley</span>
                <span className='menu-icon' ><img src="menuIcon.png" alt="" /></span>
                <span className='category' >category</span>
            </div>
            <div className='search flex flex-row justify-center items-center border border-gray-300 p-2'>
            <span className='notification' >
                    <img src="notification.png" alt="" />
                </span>
                <span>
                    <img src="search.svg" alt="" />
                </span>
                
                    <input type="text" className=' ' placeholder={`If you're wondering whether to buy it or not`} />
               
            </div>
            <div className='flex flex-row gap-6 login-container'>
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