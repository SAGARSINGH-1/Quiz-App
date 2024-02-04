// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function Swipper() {


  const review = [
    {
      id: 1,
      imgsrc: './assets/Reviews/t1.png',
    },
    {
      id: 2,
      imgsrc: './assets/Reviews/t2.png',
    },
    {
      id: 3,
      imgsrc: './assets/Reviews/t3.png',
    },
  ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className='relative w-[100%] h-[100%]'
      >
        {review.map((item) => (
          <SwiperSlide key={item.id} className='flex justify-center items-center text-center'>
            <img className='block object-cover border-4 border-indigo-500 rounded-xl' src={item.imgsrc} alt="slide" loading='lazy'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}