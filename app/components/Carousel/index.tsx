import { HTMLAttributes, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

import slide1 from '@/app/public/slides/slide-1.jpg'
import slide2 from '@/app/public/slides/slide-2.jpg'
import slide3 from '@/app/public/slides/slide-3.jpg'
import slide4 from '@/app/public/slides/slide-4.jpg'

interface CarouselProps extends HTMLAttributes<HTMLElement> {
  items?: ReactElement[]
  slidesPerView?: number
}
export default function Carousel({
  className,
  items,
  slidesPerView,
}: CarouselProps) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className={`${className}`}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={slidesPerView}
    >
      {items !== undefined ? (
        <>
          {items.map((item, i) => {
            return <SwiperSlide key={i}>{item}</SwiperSlide>
          })}
        </>
      ) : (
        <>
          <SwiperSlide className="">
            <Image
              fill={true}
              src={slide1.src}
              alt="slide 1"
              style={{ objectFit: 'contain' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              fill={true}
              src={slide2.src}
              alt="slide 2"
              style={{ objectFit: 'contain' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              fill={true}
              src={slide3.src}
              alt="slide 3"
              style={{ objectFit: 'contain' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              fill={true}
              src={slide4.src}
              alt="slide 4"
              style={{ objectFit: 'contain' }}
            />
          </SwiperSlide>
        </>
      )}
    </Swiper>
  )
}
