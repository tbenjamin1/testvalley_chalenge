// "use client"

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const ProductSlider = async ({ hotDeals }) => {
   
    // setting  embla-carousel properties
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 3
    }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
        }
    }, [emblaApi]);
    return (
        <div className='main-swipper-container' >
            <div className="viewport" ref={emblaRef}>
                <div className="container">
                    {hotDeals.map((data, index) => (<div key={index}
                        className="slide"
                    >
                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='' src={data.thumbnail ? data.thumbnail.uri : "imagephoto.png"} alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='item-info-container' >
                                <div className='item-description' >
                                    {data.title ? data.title : 'N/A'}
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >{data.installmentPrice?data.installmentPrice:'N/A'}%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >{data.installmentPrice?data.installmentPrice:'N/A'}</span>
                                        <span className='currency' >{data.installmentPrice?data.installmentPrice:'N/A'}</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            {data.type}
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' >{data.rating} </span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="https://prod-testvalley.s3.ap-northeast-2.amazonaws.com/static/preface_icon/money.png" alt="" />   <span className='px-2' >{data.code} </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>))}



                </div>
            </div>

            <div className='slider-btn' >
                <button type="button" onClick={() => emblaApi.scrollPrev()}>
                    <img className='angle' src="angleleft.png" alt="" />
                </button>
                <button type="button" onClick={() => emblaApi.scrollNext()}>
                    <img className='angle' src="anglerifht.png" alt="" />
                </button>
            </div>

        </div>
    )
}

export default ProductSlider