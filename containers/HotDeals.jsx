"use client"

import React from 'react'
import ProductSlider from './ProductSlider'

const HotDeals = async () => {

    // fetchinh hotdeals data
    const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount', { cache: 'no-store' });
    const hotDeals = await response.json();

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
            {/* slider compoents */}
            <div className='slider' >
                <ProductSlider hotDeals={hotDeals.items} />
            </div>
        </div>

    )
}

export default HotDeals