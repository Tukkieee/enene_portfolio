import avatar from "./../assets/images/avatar.png"
import React, { useRef, useEffect,useState} from 'react';
import { Navigation, Pagination,  EffectCube, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './../styles/customSwiperStyles.css'

export const Testimony = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
      // Start autoplay
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.start();
      }
    }, []);
    return (
        <>
            <div className="testimony">
                <Swiper
                    modules={[Navigation, Pagination,   EffectCube, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    ref={swiperRef}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    effect={'cube'}
                    grabCursor={true}
                    autoplay={{
                        delay: 4000, 
                        disableOnInteraction: false, 
                      }}
                    loop={true} 
                    speed={1500}
                    cubeEffect={{
                        shadow: false,
                    }}
                    pagination={true}

                    className="mySwiper"

                >
                    <SwiperSlide>
                        <div className="bx-2">
                            <p className="p1"><span className="quote">“</span> The portfolio section is where  truly shines. Each project is meticulously presented, offering a comprehensive overview of the design process. showcasing the designer's versatility and ability to tailor their work to different styles and industries. ”</p>
                            <div className="testimony-color">
                                <div className="bx-2a work-sp">
                                    <div className="company-img ">
                                        <img src={avatar} alt="E.M" />
                                    </div>
                                    <div className=" l-sp">
                                        <h4 >Enene, Miracle</h4>
                                        <p className="">CEO, Bend</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bx-2">
                            <p className="p1"><span className="quote">“</span> The portfolio section is where  truly shines. Each project is meticulously presented, offering a comprehensive overview of the design process. showcasing the designer's versatility and ability to tailor their work to different styles and industries. ”</p>
                            <div className="testimony-color">
                                <div className="bx-2a work-sp">
                                    <div className="company-img ">
                                        <img src={avatar} alt="E.M" />
                                    </div>
                                    <div className=" l-sp">
                                        <h4 >Enene, Miracle</h4>
                                        <p className="">CEO, Bend</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bx-2">
                            <p className="p1"><span className="quote">“</span> The portfolio section is where  truly shines. Each project is meticulously presented, offering a comprehensive overview of the design process. showcasing the designer's versatility and ability to tailor their work to different styles and industries. ”</p>
                            <div className="testimony-color">
                                <div className="bx-2a work-sp">
                                    <div className="company-img ">
                                        <img src={avatar} alt="E.M" />
                                    </div>
                                    <div className=" l-sp">
                                        <h4 >Enene, Miracle</h4>
                                        <p className="">CEO, Bend</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    )
}