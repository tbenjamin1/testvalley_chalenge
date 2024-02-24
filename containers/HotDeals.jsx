"use client"

import React from 'react'
import ProductSlider from './ProductSlider'

const HotDeals = () => {
    return (
            <div className=" hot-deals-conatiner">
                <div className='description' >
                    <span className='hot-title ' >
                        HOT DEAL
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

export default HotDeals