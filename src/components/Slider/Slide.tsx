'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { testimonialData } from '@/app/data/testimonial'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Autoplay } from 'swiper/modules'



export default function Slide () {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className=' mx-8 '
        // Configure autoplay
        autoplay={{
          delay: 10000, // Time in milliseconds between each slide change (3 seconds)
          disableOnInteraction: false // Allow autoplay to continue even if user interacts with the slider
        }}
        modules={[Autoplay]} // Include Autoplay module
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className='min-w-0 shrink-0 grow-0 basis-full pl-4 '
            >
              <div className='p-2 pb-5 '>
                <div className='text-center'>
                  <div
                   
                    className='my-8'
                  >
                    <blockquote className='h3 relative text-sm sm:text-xl'>
                      <span className='md:absolute -left-2 text-2xl md:top-0 md:block '>
                        “
                      </span>
                      {testimonial.feedback}
                      <span className='md:absolute text-2xl -right-2 md:bottom-0 md:block'>
                        ”
                      </span>
                    </blockquote>
                  </div>
                  <div className='mt-8 max-w-md mx-auto'>
                    <figcaption>
                      <div className='universal-text-2 font-semibold flex items-center justify-center space-x-4 my-4'>
                        <Avatar>
                          <AvatarImage className='' src={testimonial.image.src} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <p className='text-sm sm:text-lg'>{testimonial.name}</p>
                      </div>
                      <div className='universal-text-2 font-normal text-gray-900 capitalize text-sm sm:text-lg'>
                        {testimonial.title}
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
