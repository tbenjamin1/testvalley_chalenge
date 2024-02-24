
"use client"

import React from 'react'

const MainShortcut = async () => {

  const response = await fetch('https://api.testvalley.kr/main-shortcut/all', { cache: 'no-store' });
  const mainShortcut = await response.json();
  return (
    <div className=" short-cut-conatiner">

      {mainShortcut.map((data, index) => (
        <div key={index} className='short-cut-item' >
          <img src={data.imageUrl} alt="" className=' w-20 h-20  cursor-pointer' />
          <span> {data.title} </span>
        </div>
      ))}
    </div>
  )
}

export default MainShortcut