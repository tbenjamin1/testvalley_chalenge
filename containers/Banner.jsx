
"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Navigation, } from 'swiper/modules';
import BannerStyle from './Banner.css'

const Banner = async () => {
    const response = await fetch('https://api.testvalley.kr/main-banner/all', { cache: 'no-store' });
    const imagesData = await response.json();
    return (
        <div className='main-swipper-container' >
            <Swiper style={{ height: '250px' }}
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {imagesData.map((data, index) => (
                    <SwiperSlide key={index} style={{ width: '960px' }}>
                        <img src={data.pcImageUrl} alt="" />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Banner