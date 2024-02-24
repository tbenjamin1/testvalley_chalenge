// "use client"

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const ProductSlider = ({ }) => {



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
                    <div

                        className="slide"

                    >

                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='h-full w-full object-cover' src="home-event.svg" alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='px-2 flex flex-col' >
                                <div className='item-description' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor perspiciatis sunt tempore labore? Ut veniam aliquam consequatur in iusto accusamus ab,
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >50%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >33,950</span>
                                        <span className='currency' >$</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            coupon
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' > 3.5</span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="car.png" alt="" />   <span className='px-2' >hagaxaghva</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div

                        className="slide"

                    >
                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='h-full w-full object-cover' src="home-event.svg" alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='px-2 flex flex-col' >
                                <div className='item-description' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor perspiciatis sunt tempore labore? Ut veniam aliquam consequatur in iusto accusamus ab,
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >50%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >33,950</span>
                                        <span className='currency' >$</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            coupon
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' > 3.5</span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="car.png" alt="" />   <span className='px-2' >hagaxaghva</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div

                        className="slide"

                    >
                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='h-full w-full object-cover' src="home-event.svg" alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='px-2 flex flex-col' >
                                <div className='item-description' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor perspiciatis sunt tempore labore? Ut veniam aliquam consequatur in iusto accusamus ab,
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >50%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >33,950</span>
                                        <span className='currency' >$</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            coupon
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' > 3.5</span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="car.png" alt="" />   <span className='px-2' >hagaxaghva</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div

                        className="slide"

                    >
                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='h-full w-full object-cover' src="home-event.svg" alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='px-2 flex flex-col' >
                                <div className='item-description' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor perspiciatis sunt tempore labore? Ut veniam aliquam consequatur in iusto accusamus ab,
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >50%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >33,950</span>
                                        <span className='currency' >$</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            coupon
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' > 3.5</span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="car.png" alt="" />   <span className='px-2' >hagaxaghva</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div

                        className="slide"

                    >
                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='h-full w-full object-cover' src="home-event.svg" alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='px-2 flex flex-col' >
                                <div className='item-description' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor perspiciatis sunt tempore labore? Ut veniam aliquam consequatur in iusto accusamus ab,
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >50%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >33,950</span>
                                        <span className='currency' >$</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            coupon
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' > 3.5</span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="car.png" alt="" />   <span className='px-2' >hagaxaghva</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div

                        className="slide"

                    >
                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='h-full w-full object-cover' src="home-event.svg" alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='px-2 flex flex-col' >
                                <div className='item-description' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor perspiciatis sunt tempore labore? Ut veniam aliquam consequatur in iusto accusamus ab,
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >50%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >33,950</span>
                                        <span className='currency' >$</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            coupon
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' > 3.5</span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="car.png" alt="" />   <span className='px-2' >hagaxaghva</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div

                        className="slide"

                    >
                        <div className=' ' >
                            <div className=' image-container  '>
                                <img className='h-full w-full object-cover' src="home-event.svg" alt="" />
                            </div>

                            <div className='item-badge flex py-5 px-1 ' >
                                <img className='return-img' src="return.png" alt="" /><span className='pl-1' >returnable</span>
                            </div>
                            <div className='px-2 flex flex-col' >
                                <div className='item-description' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor perspiciatis sunt tempore labore? Ut veniam aliquam consequatur in iusto accusamus ab,
                                </div>
                                <div className='flex  justify-start items-center' >
                                    <span className='discount flex justify-center items-center' >50%</span>
                                    <div className='flex justify-center items-center' >
                                        <span className='amount' >33,950</span>
                                        <span className='currency' >$</span>
                                    </div>

                                </div>
                                <div className='flex flex-col' >
                                    <div>
                                        <div className='reward' >
                                            coupon
                                        </div>
                                    </div>
                                    <div className='rate' >
                                        <img className='rate-img' src="star.png" alt="" />   <span className='rate-value' > 3.5</span>
                                    </div>
                                    <div className=' information' >
                                        <img className='info-img' src="car.png" alt="" />   <span className='px-2' >hagaxaghva</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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