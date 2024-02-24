"use client"

import React from 'react'
import ProductSlider from './ProductSlider'

const AllItems = () => {
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
      <div className='slider' >
        <ProductSlider />
      </div>
    </div>

  )
}

export default AllItems