'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { blogData } from '@/app/data/blog'

export default function Slide () {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className=' mx-8 '
        // Configure autoplay
        autoplay={{
          delay: 3000, // Time in milliseconds between each slide change (3 seconds)
          disableOnInteraction: false // Allow autoplay to continue even if user interacts with the slider
        }}
        modules={[Autoplay]} // Include Autoplay module
      >
        {blogData.map((post,index) => (
              <SwiperSlide key={index}>
            <a target='_blank' key={post.id} className='block' href={post.link}>
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <Image
                  alt={post.imageAlt}
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg='1'
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  src={post.imageUrl}
                />
                <p className='mb-2'>
                  <time
                    dateTime={post.date}
                    className='text-sm text-muted-foreground'
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
                <p className='text-foreground mb-4'>{post.description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
