"use client"

import React from 'react'
import ProductSlider from './ProductSlider'

const AllItems =async () => {

  // fetching all items
  const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount', { cache: 'no-store' });
  const imagesData = await response.json();
 
  // filtering all items with SINGLE and TILE
  const filteredData = imagesData.items.filter(item => item.type === "SINGLE" && item.viewType === "TILE");
 
  return (
    <div className='hot-deals-conatiner'>

      <div className='description' >
        <span className='hot-title ' >
         New Item
        </span>
        <span className='hot-sub-title' >
          HAPPY HOUR
        </span>
      </div>
      {/* slider compoent */}
      <div className='slider' >
        <ProductSlider hotDeals={filteredData} />
      </div>
    </div>

  )
}

export default AllItems